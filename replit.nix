{ pkgs }: {
    deps = [
        pkgs.nodejs-16_x
        pkgs.openssh_with_kerberos
        pkgs.nodePackages.typescript
        pkgs.nodePackages.pm2
        pkgs.arcan.ffmpeg
        pkgs.libwebp
        pkgs.git
        pkgs.python2
        pkgs.python310Packages.python
        pkgs.imagemagick
        pkgs.libuuid
    ];
    env = {
        LD_LIBRARY_PATH = pkgs.lib.makeLibraryPath [
            pkgs.libuuid
        ];
    };
}
