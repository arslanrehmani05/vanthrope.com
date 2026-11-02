import os
import subprocess
from PIL import Image

MASTER_SVG = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
  <!-- Outer Dark Squircle Tile -->
  <rect x="1" y="1" width="30" height="30" rx="7" fill="#111113" stroke="rgba(255, 255, 255, 0.25)" stroke-width="1.2"/>
  <!-- Subtle Inner Perimeter Frame for Depth -->
  <rect x="2.5" y="2.5" width="27" height="27" rx="5.5" fill="none" stroke="rgba(255, 255, 255, 0.10)" stroke-width="0.5"/>
  <!-- Brand Vector Mark: Inverted 'V' -->
  <g>
    <!-- Left Wing (Solid Crisp White) -->
    <path d="M 7.5 9.5 L 12 9.5 L 15.2 16 L 15.2 25.5 Z" fill="#f0f0f2"/>
    <!-- Right Wing (Balanced Depth Facet) -->
    <path d="M 24.5 9.5 L 20 9.5 L 16.8 16 L 16.8 25.5 Z" fill="rgba(240, 240, 242, 0.48)"/>
    <!-- Central Precision Core Node -->
    <circle cx="16" cy="20.5" r="1.1" fill="#ffffff"/>
  </g>
</svg>"""

def rasterize_svg(svg_content, size, output_path):
    os.makedirs(os.path.dirname(os.path.abspath(output_path)), exist_ok=True)
    # Inject width and height to SVG for sips rasterization
    sized_svg = svg_content.replace('<svg ', f'<svg width="{size}" height="{size}" ')
    temp_svg = f"/tmp/vanthrope_temp_{size}.svg"
    with open(temp_svg, "w") as f:
        f.write(sized_svg)
    
    subprocess.run(["sips", "-s", "format", "png", temp_svg, "--out", output_path], check=True, stdout=subprocess.DEVNULL)
    if os.path.exists(temp_svg):
        os.remove(temp_svg)
    print(f"✓ Rasterized {output_path} ({size}x{size})")

def generate_all():
    # 1. Write master SVGs
    for svg_path in ["public/favicon.svg", "public/icon.svg", "app/icon.svg"]:
        os.makedirs(os.path.dirname(svg_path), exist_ok=True)
        with open(svg_path, "w") as f:
            f.write(MASTER_SVG)
        print(f"✓ Written {svg_path}")

    # 2. Standard PNGs
    targets = [
        ("public/favicon.png", 32),
        ("public/icon.png", 32),
        ("app/icon.png", 32),
        ("public/apple-icon.png", 180),
        ("public/apple-touch-icon.png", 180),
        ("app/apple-icon.png", 180),
        ("public/icons/icon-192.png", 192),
        ("public/icons/icon-512.png", 512),
    ]

    for path, size in targets:
        rasterize_svg(MASTER_SVG, size, path)

    # 3. Maskable PWA icons (with 12% padding on #111113 squircle background for safe-zone)
    for size in [192, 512]:
        inner_size = int(round(size * 0.78))
        padding = (size - inner_size) // 2
        temp_inner = f"/tmp/vanthrope_inner_{inner_size}.png"
        rasterize_svg(MASTER_SVG, inner_size, temp_inner)
        
        base = Image.new("RGBA", (size, size), (17, 17, 19, 255))
        inner_img = Image.open(temp_inner).convert("RGBA")
        base.paste(inner_img, (padding, padding), inner_img)
        
        maskable_path = f"public/icons/icon-maskable-{size}.png"
        base.save(maskable_path, "PNG")
        print(f"✓ Generated maskable {maskable_path} ({size}x{size})")
        if os.path.exists(temp_inner):
            os.remove(temp_inner)

    # 4. Multi-resolution ICO (16, 32, 48, 64)
    # Rasterize at 64 first
    temp_64 = "/tmp/vanthrope_ico_64.png"
    rasterize_svg(MASTER_SVG, 64, temp_64)
    img_64 = Image.open(temp_64).convert("RGBA")
    
    for ico_path in ["public/favicon.ico", "app/favicon.ico"]:
        img_64.save(ico_path, format="ICO", sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])
        print(f"✓ Generated multi-res ICO {ico_path} [16, 32, 48, 64]")
    if os.path.exists(temp_64):
        os.remove(temp_64)

if __name__ == "__main__":
    generate_all()
