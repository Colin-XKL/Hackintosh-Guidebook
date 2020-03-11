# 快速安装
在掌握了基本知识点，且你的机型有现成的EFI的情况下，便可以参考基本步骤，完成黑苹果的安装与配置


## 基本要素
* 容量>8GB的U盘（macos镜像通常至少在8g左右，建议16G U盘）
* 下载好的mac os系统镜像
* Win PE 
* 分区工具（如Diskgenius）
* 镜像烧写工具（rufus、transmac等）
* EFI文件
## 基本步骤
1. 将镜像烧写到U盘中（如果使用自带EFI的镜像如黑果小兵的镜像则烧写完成后会有EFI分区和系统镜像分区，若使用官方镜像则需手动打造EFI引导分区）
2. 将硬盘上准备要安装黑苹果系统的分区格式化为HFS分区（Diskgenius里有设置项）
3. 检查环境设置：
   1. 进入BIOS更改设置。参考设置项：
      1. SATA 模式： AHCI 模式
      2. Secure Boot ：关，不然无法进入 Clover
      3. 操作系统模式选择：其他操作系统（Other OS）（看 BIOS 设置情况）
      4. 引导模式选择：UEFI
      5. CSM：打开，如果有的话
   2. 检查硬盘分区
      1. 硬盘分区表格式：GPT
      2. EFI分区容量大小，参考大小：200M
4. 切换使用U盘引导，进入系统安装环节
## 常见问题




## 推荐阅读

图文教程：
* 黑苹果 | 从零开始安装 macOS 10.14.x Mojave | 醉渔小站
<https://blog.zuiyu1818.cn/posts/Hackintosh.html>
* 黑苹果 Mac OS 10.14.6 Mojave 安装 - Byron Han 的博客 | Byron Han Blog
<https://blog.hanjl.com/2019/07/24/Hackintosh-i5-7400-b250m-D3H/>