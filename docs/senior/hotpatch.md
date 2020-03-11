# Hotpatch 法
通过更先进、更灵活的hotpatch热补丁法修复问题

## 介绍
在使用DSDT补丁的过程中，我们需要对依次从主板中提取ACPI信息，在进行反编译、修改编辑、再重新编译以应用。不仅过程繁琐，在来回反编译和编译的过程中难免会出现错误，导致最终的DSDT补丁不稳定。经过高手们的大量实践经验，他们发现很多时候，一般的机型所需要进行的DSDT修补的动作是一样的，接着上一篇的例子，比如都是对某一个地方进行更名为`α`的操作，但不同的是，对于机器1需要从`A`更名为`α`，对于机器2是从`a`更名为`α`。区别于制作繁琐、灵活性差的传统DSDT静态补丁，我们可以利用Clover中的新特性实现在系统启动过程中动态修补ACPI表，这就是Hotpatch热补丁。

## Hotpatch仓库
### RehabMan的Hotpatch仓库  
**项目主页**:https://github.com/RehabMan/OS-X-Clover-Laptop-Config  
该项目仓库为全英文，不过黑果小兵在他的博客中对一些常用的Hotpatch补丁的功能做了翻译和解释，参见：https://blog.daliansky.net/hotpatch-detailed-solution.html

### 黑果小兵和宪武等维护的Hotpatch仓库
**项目地址(Clover)**:https://github.com/daliansky/P-little  
**项目地址(OpenCore)**:https://github.com/daliansky/OC-little  
黑果小兵和宪武是国内黑苹果的两个大神，项目全中文，这个仓库收录了绝大多数常用hotpatch补丁。




## 扩展阅读
* Hotpatch 简易教程（修复声卡、屏蔽独显、驱动核显、快捷键调节亮度）- 远景论坛 - 微软极客社区
http://bbs.pcbeta.com/forum.php?mod=viewthread&tid=1766329
* 常用hotpatch 功能详解 | 黑果小兵的部落阁
https://blog.daliansky.net/hotpatch-detailed-solution.html
* 