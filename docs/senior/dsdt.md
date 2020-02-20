# DSDT 补丁
通过DSDT的方式修复问题

*本篇仅作基本的介绍和指引，更多实际应用请前往其他解决特定问题的板块进行查看*
## 介绍
由于黑苹果安装的硬件并不在Apple的官方支持范围内，我们的黑苹果在使用时由于这些硬件差异性经常会出现各种问题。比如笔记本电池电量无法显示、亮度无法调节、笔记本的快捷功能按键无法使用等等。为了解决这些问题，我们需要对我们的硬件量身定制一套黑苹果方案。这里就要来介绍DSDT/SSDT。

### 什么是DSDT
> ACPI 全称为 Advanced Configuration and Power Interface ，即高级配置和电源管理接口，是由 HP、Intel、Microsoft、Phoenix 和 Toshiba 共同开发，**用来定义能够为主板上设备提供操作系统配置和电源管理的硬件和软件接口**的公开的行业规范。它能在操作平台独立的方式下描述系统硬件并且以固定格式的数据结构或者 AML 形式表示，**最主要的 AML 表便是 DSDT**（Differentiated System Description Table）。此外还有**SSDT**(System Services Descriptor Table)，中文为系统服务描述符表。

### DSDT补丁的基本原理
DSDT打补丁的过程可以理解为：假设你的笔记本屏幕亮度控制的硬件入口为`A`，但是在标准的苹果硬件上，这个接口写作`α`，但其实两者底层原理是一样的或者说互相的访问的兼容的，那么你要让你的黑苹果系统能够正确访问到亮度调整的接口，就要为这个入口`A`起一个别名，让黑苹果系统访问`α`接口时跳转到`A`接口，从而实现黑苹果系统的亮度控制。  
此处对于DSDT补丁的叙述仅仅是补丁功能的一小部分，更加深入的了解DSDT请参看扩展阅读。

### 为什么一般DSDT补丁不能通用
如果你尝试使用来自另一台电脑的 DSDT，那么你几乎总会以失败告终。你很难验证来自其他电脑的 ACPI 文件是否有效。如果你使用外来的 ACPI 文件，有时即使硬件配置上的细微差别（BIOS 版本，内存大小，BIOS 的设置以及其它硬件差异）也会导致系统不稳定，出现莫名其妙的问题。这些硬件配置差异会导致地址空间的差异，从而导致一台计算机的 DSDT 并不适合另一台计算机。即使同一型号的电脑，也经常会发生配置了不同的主板这种情况，从而导致 ACPI 文件的各不相同。

### DSDT打补丁基本流程
打补丁的过程一般分为以下几步：

1. 获取原始文件
2. 反编译原始文件
3. 分析和过滤原始文件
4. 打补丁
5. 保存（编译）和安装


## 工具
**iasl**，下载地址如下 
* win 版 iasl 程序 https://www.acpica.org/downloads/binary-tools
* mac 版 iasl 程序 https://bitbucket.org/RehabMan/acpica/downloads/

## DSDT提取
提取DSDT的几种方法
* acpica 的 `acpiextract` 命令
* Clover 的 F4 功能键，保存原始 DSDT 到 `/EFI/ACPI/origin`
* linux 下的 `cat /proc/....`
* DPCIManager 的 `Extract DSDT`
* Clover Config 的 `Export`  

因为提取的内容是一样的，因此虽然获取方式不同，但最终得到 DSDT 是没有任何区别的。


## 扩展阅读
**中文资源**

* dsdt,ssdt 联合反编译小白教程 - 远景论坛 - 微软极客社区
http://bbs.pcbeta.com/forum.php?mod=viewthread&tid=1791127
* [视频] http://player.youku.com/embed/XMzcyMDgwODUyOA
* 联合 DSDT 和 SSDT 进行反编译 —— 减少 DSDT 和 SSDT 错误的尝试
http://www.360doc.com/content/16/0704/00/29520573_572792253.shtml
* 浅谈 DSDT 的一些错误警告修复和一些必要代码
http://bbs.pcbeta.com/forum.php?mod=viewthread&tid=1084354
* dsdt 修复 （常用小错误解决方法讨论）
http://bbs.pcbeta.com/viewthread-748485-1-1.html
* 

**英文资源**
* 通过 Clover 实现在不提取 DSDT／SSDT 的情况下打补丁  http://www.tonymacx86.com/threads/guide-using-clover-to-hotpatch-acpi.200137/
* DSDT仓库，由社区贡献
The files linked here are taken directly from a DSDT extract from the specific motherboard, and have been hand edited with minimal edits for CMOS reset (if necessary), UHCI/EHCI, IDE (SATA), PIC/TMR/HPET, SBUS, and HDEF. Gigabyte and ASUS DSDTs have all been checked, tested and verified. Others are from untested and unverified sources. https://www.tonymacx86.com/dsdt-database
* 