# 关于Kext
本篇介绍黑苹果安装的一个重点：Kext。介绍Kext的基本概念以及常用的Kext的功能及下载站点

## Kext 安装
### 安装到EFI文件夹
下载 kext 直接复制到`EFI/Clover/kexts/other/` 即可，重启生效  
*注：许多kexts无法在`Clover/kexts`中运行，因此将它们安装到`/S/L/E`中它们可以包含在内核缓存中是最好的方法。*
### 安装到系统目录
1. 将EFI文件复制到系统目录`/System/Library/Extensions/`
2. 建立缓存，让系统下次启动自动加载`sudo kextcache -i /`
   
*注：推荐把第三方驱动安装到`/Library/Extensions` ，而不是`/System/Library/Extensions`*  
**注意**：使用此方法安装的kext会在系统更新后丢失
### 使用其他GUI工具
使用kext安装程序，例如Kext Wizard

## 常用Kext介绍
### 核心驱动
#### FakeSMC.kext
安装黑苹果必须要有的一个驱动程序，欺骗OSX系统要安装的PC是SMC硬件，所以说没有他你是不可能安装好的。


#### AHCIPortInjector.kext
什么是AHCI？ AHCI（串行ATA高级主机控制器接口）串行ATA高级主控接口/高级主机控制器接口，众所周知安装黑苹果时需要开启BIOS的AHCI功能，不过有些老的主板并不支持此选项，所以要用的免AHCI的补丁，此补丁可以免去没有AHCI选项的苦恼。

#### FakePCIID.kext
因为Mac系统会对系统- PCI device-id进行验证，但是黑苹果的硬件不能通过这一验证，所以需要仿冒PCIID ，该内核扩展可以说是黑苹果必备驱动。

#### Lilu.kext
Lilu插件列表[持续更新] 
Lilu是vit9696开发的一个内核扩展（kext），可对“任意”内核扩展（kext）/进程（进程）/运行库（框架/库）等进行打补丁。 （但其实某些比较底层的kext仍无法修改，如基本硬件驱动，底层重要依赖等）。 
很多驱动都依赖它，缺少将无法正常运行。

#### FakePCIID_Intel_HD_Graphics.kext
Intel HD Graphic显卡的device-id的仿冒驱动，适用于HD4200 / HD4400 / HD4600 / HD5600系列

#### NVIDIA webDriver
英伟达显卡的驱动程序，目前最高版本支持mac os 10.13.6
https://gfe.nvidia.com/mac-update

### 电源
#### ACPIBatteryManager.kext
推荐采用RehabMan的ACPIBatteryManager.kext可以很好的进行电源管理。 但由于每型号的笔记本对于电池的方法都不尽相同，你也可以打适合自己的DSDT补丁。

#### NullCPUPowerManagement.kext
不少主板都需要用NullCPUPowerManagement.kext（Disabler.kext）来禁用原生的AppleIntelCPUPowerManagement.kext，否则，CPU的温度会比正常高出十度左右。 当然，有些品牌的主板（比如华硕的P5K）原生就可以加载AppleLPC，所以，这些主板的CPU温度是正常的，也就没必要禁用AppleIntelCPUPowerManagement了。 
当然也有其他的解决方法比如说通过ACPI表DSDT来解决等等。

参考： http://www.360doc.com/content/12/0214/10/8539097_186486767.shtml

### 声音
#### AppleALC
AppleALC的作用是加载原生声卡驱动的
这种驱动方式的好处是升级更新也不需要重新安装声卡驱动 
AppleALC安装条件是你的没动过原生的声卡驱动和按其他任何有关于声卡的驱动 
S / L / E下的applehda.kext必须保证是原生的

#### VoodooHDA.kext
VoodooHDA是一个开源的声卡驱动程序，支持大部分声卡程序，跟AppleHDA Patcher差不多，此声卡可能会爆音，如果你不介意。

#### AppleHDA Patcher
AppleHDA Patcher v1.8是一款黑苹果仿冒声卡驱动，支持10.12，集合了众多黑苹果声卡驱动

#### CodecCommander.kext
解决睡眠唤醒无声问题

#### EAPDFix.kext
解决睡眠唤醒后扬声器或耳机无声的问题。

### 触摸板
#### VoodooPS2Controller.kext
RehabMan维护的黑苹果键盘鼠标触摸板驱动万能驱动程序– VoodooPS2Controller

#### ApplePS2SmartTouchPad.kext
Smart TouchPad适用于黑苹果笔记本，支持多点触摸的触摸板（触摸板）驱动程序，支持ELAN，FocalTech和Synaptics的触控板。 驱动来源于VoodooPS2和ApplePS2的Linux驱动开源代码，作者已经添加了更多的功能，可以充分利用触摸板，使其在各方面都接近苹果触摸板。 

### USB
#### USBInjectAll.kext
苹果系统在OS X 10.11之后改变了USB驱动的加载方式，以至于大多数USB端口无法被驱动，对于黑苹果用户来说是个致命问题，USB无法驱动也就意味着你的键盘鼠标等USB设备无法使用，还有奇葩的摄像头问题.USBInjectAll.kext驱动文件可以帮助黑苹果驱动你的USB设备，包括3.0的端口和摄像头等问题。

#### GenericUSBXHCI.kext
系统的USB3.0驱动，10.8.x以上都支持！

### 无线
#### AppleIntelWiFiMVM.kext
英特尔无线网卡驱动

### 有线网卡
#### AppleIGB.kext
基于网卡的英特尔有线网卡驱动，支持82575，82576，82580，I350，I210等

#### IntelMausiEthernet.kext
有线网卡驱动程序，适用于英特尔主板自带的黑苹果网卡驱动程序，支持大部分网卡型号IntelMausiEthernet.kext驱动程序同时支持IPV4和IPV6的TCP，UDP和的校验接受和发送。
#### AppleIntelE1000e.kext
黑苹果千兆网卡驱动，支持型号众多，如果你网卡硬件是Atheros的，可以下载使用。

#### AtherosE2200Ethernet.kext
支持高通Qualcomm Atheros AR816x，AR817x，Killer E220x和Killer E2400的黑苹果网卡驱动程序。

#### RealtekRTL8100.kext
Realtek RTL8101E / 8102E / 8103E / 8401E / 8105E / 8402 / 8106E / 8106EUS有线网卡驱动

#### RealtekRTL8111.kext
Realtek RTL8111X / 8168X系列有线网卡驱动

### 其他
#### Shiki.kext
如果您有一台Ivy Bridge或者更新的平台机器，并且无法使用iTunes DRM播放但您的显卡可以在HDCP模式下工作的话，您可以尝试使用Shiki。 有时Shiki也可以修复Sandy Bridge平台的这些问题。

不要在SLE或LE中设置Lilu和这些插件，它将无法正常工作。 使用来自Clover的kexts注射。

#### IntelGraphicsFixup
修复所有已知Intel图形上的引导徽标。

修复了PAVP冻结Intel Azul，Skl，Kbl Graphics的问题。 
修复了Azul，Skl，Kbl Graphics的初始化问题。

#### NvidiaGraphicsFixup
修复了AppleGraphicsDevicePolicy.kext中的一个问题，以便我们可以使用任何ProductName，而不会通常挂起黑屏。 
修改macOS以将NVIDIA的Web驱动程序识别为平台二进制文件。 这解决了透明窗口没有内容的问题，这些窗口出现在使用Metal并启用了库验证的应用程序中。 常见的受影响的应用程序是iBooks和Little Snitch网络监视器，虽然这个补丁是通用的并且修复了它们。

将IOVARendererID注入GPU属性（基于Shiki的非冻结英特尔和/或任何独立GPU解决方案所需）

NVidiaAudio设备为HDMI音频添加连接器类型，布局ID和其他属性（允许HDMI，DP，数字DVI端口的音频）

#### HibernationFixup
在某些硬件上启用3和25模式休眠。 
修补IOPCIFamily以避免在恢复后挂起和黑屏。 （选项） 
（使用@slice中的最后一个FakeSMC.kext）

#### AirportBrcmFixup
支持AirPort_Brcm4360，AirPort_BrcmNIC和AirPort_BrcmNIC_MFG 
实现用于传递芯片ID检查的补丁，在<= 10.12中成功启动驱动程序所需的实现“第三方设备”的补丁实现（返回供应商名称“Apple”） 
实现删除白名单检查的补丁


