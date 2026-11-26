# PA Handshake · 项目说明（给 Claude Code）

## 这是什么

一套开源约定：两个人考虑合作时，各自的个人 agent（PA）先读对方的公开历史，通过邮件互相追问（最多 10 轮），给自己的主人出一页会前简报。外加一个网站 pahandshake.com 和一个收费的托管 PA 邮箱服务（尚未开发）。

- 开源部分（免费，建名声）：`SPEC.md` 规范、`card/` 名片模板、`skill/SKILL.md` 给 agent 的指令、`examples/` 两个模拟案例
- 网站：`site/`，Cloudflare Pages，静态页 + 一个收集早期用户邮箱的函数
- 托管服务（以后收费）：`docs/hosted-pa/` 里是早期的 intent 和 spec，需要按现在的 SPEC.md 更新后再开发

## 已经定下来的事

- 名字 PA Handshake，域名 pahandshake.com，仓库 github.com/s87343472/pa-handshake（公开）
- 许可：规范和文档 CC BY 4.0，代码 MIT
- 定位是传输层之上的"应用约定"，不和 A2A、ANP 竞争；v0.1 跑在普通邮件上，以后可以跑在 A2A 上
- 必须单方面就能用：对方没有 PA 也能跑（读公开信息、直接给本人发邮件）
- PA 只知道公开内容 + 主人明确交给它的东西（三区域：公开区 / PA 区 / 个人区，PA 读不到个人区）
- 问历史、取舍、结果和条件，不考技能（AI 时代技能不稀缺）
- 证据分强弱：平台签发 > 对方开放只读、自己亲眼看 > 长期公开历史 > 对方 PA 转述 > 口头说法；截图算最弱
- 诚信机制：身份验证码、关键数字隔轮复问、对等交换、诚信信号清单（SPEC 第 8 节）
- PA 不替主人做承诺，不打分、不排序
- 目标人群：X / Reddit / Facebook 上做副业和独立开发的人；对他们的卖点是"合作前让 AI 先查一遍对方、防骗、省时间"，不讲"未来大厂会推 PA"
- 商业模式：开源免费；托管 PA 邮箱按次数或额度收费，默认由平台承担模型费用，"用户自带 API key"只作为高级选项
- 壁垒不在技术，在信誉记录、中立第三方位置、跨语言协作和小圈子分发

## 下一步（按优先级）

1. **网站上线**：Cloudflare Pages 关联本仓库，根目录 `site`，无构建命令；建 KV 绑定为 `WAITLIST`；绑定 pahandshake.com。详见 `site/README.md`。上线后检查 Google 字体是否正常加载（本地截图时没加载到）
2. **真实对抗测试**：让一个模型按 `examples/dishonest-counterparty` 扮演 Jordan，攻击装了 `skill/SKILL.md` 的 PA，看会不会说漏、会不会被伪装的"系统说明"骗过。发现的问题改进 SPEC 和 SKILL，每个问题留一个可复跑的测试用例
3. **真实双方试跑**：再让两个模型各扮一方，按 SKILL 跑完 sf-app-commercialization 场景，对比手写示例，看简报质量
4. **托管 PA 邮箱 v0.1**：先按当前 SPEC 更新 `docs/hosted-pa/` 的 intent 和 spec，再写 plan。基础设施候选：AgentMail（给 agent 用的邮箱 API）或 Cloudflare Email Routing + Workers；用户主邮箱不读，只发通知，主人回复时用邮件签名校验 + 短码认证
5. **推广**：仓库 About 加简介和话题标签；把两个案例写成 X / Reddit 帖子；找 3–5 对真实要合作的人免费陪跑

## 协作习惯

- 和我沟通用简体中文；对外内容（规范、网站、README）用英文，`README.zh.md` 保持中文同步
- 文档说人话、结论放前面，不要 AI 腔；除非我明确要求，交付 markdown，不要生成 Word
- 改规范时同步改 `skill/SKILL.md` 和受影响的示例，保持三者一致
- 示例都是手写模拟，要一直标明"Simulated"
