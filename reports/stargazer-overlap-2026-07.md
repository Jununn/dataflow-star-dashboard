# 2026-07 DataFlow Stargazer 共同关注分析

生成时间：2026-07-28T03:27:12.608Z

样本：1300 / 1387 个 7 月新增 stargazer；每人最多读取最近 300 个 starred repos。

## 快速判断

- Top 12 共同关注项目之间的用户集合平均重叠：94%；区间：85% - 98%。
- 这个重叠度很高，说明 7 月新增 stargazer 中存在一批 GitHub star 行为高度相似的人群；它更像同一类信息源/榜单/推荐链路带来的用户，而不是完全随机的自然扩散。
- 共同关注集中在 Agent / Workflow、LLM Infra、RAG / Search，其次才是 Data Engineering。

## 共同关注项目 Top 30（过滤泛项目）

| 项目 | 共同用户 | 样本占比 | 分类 | 语言 | Stars | 描述 |
|---|---:|---:|---|---|---:|---|
| [HKUDS/LightRAG](https://github.com/HKUDS/LightRAG) | 724 | 56% | RAG / Search | Python | 38,243 | [EMNLP2025] "LightRAG: Simple and Fast Retrieval-Augmented Generation" |
| [ModelEngine-Group/nexent](https://github.com/ModelEngine-Group/nexent) | 721 | 55% | Agent / Workflow | Python | 5,795 | Nexent is a zero-code platform for auto-generating production-grade AI agents using Harnes |
| [facebookresearch/vggt](https://github.com/facebookresearch/vggt) | 706 | 54% | RAG / Search | Python | 14,038 | [CVPR 2025 Best Paper Award] VGGT: Visual Geometry Grounded Transformer |
| [qualcomm/GenieX](https://github.com/qualcomm/GenieX) | 696 | 54% | LLM Infra | Rust | 8,272 | Run frontier LLMs and VLMs locally on Qualcomm devices across NPU, GPU, and CPU with a few |
| [Oneflow-Inc/oneflow](https://github.com/Oneflow-Inc/oneflow) | 688 | 53% | Agent / Workflow | C++ | 9,417 | OneFlow is a deep learning framework designed to be user-friendly, scalable and efficient. |
| [Klavis-AI/klavis](https://github.com/Klavis-AI/klavis) | 687 | 53% | Agent / Workflow | Python | 5,778 | Klavis AI:  MCP integration platforms that let AI agents use tools reliably at any scale |
| [microsoft/UFO](https://github.com/microsoft/UFO) | 673 | 52% | Agent / Workflow | Python | 9,339 | UFO³: Weaving the Digital Agent Galaxy |
| [Hunyuan-PromptEnhancer/PromptEnhancer](https://github.com/Hunyuan-PromptEnhancer/PromptEnhancer) | 668 | 51% | LLM Infra | Python | 3,737 | [CVPR 2026] PromptEnhancer is a prompt-rewriting tool, refining prompts into clearer, stru |
| [hyperai/tvm-cn](https://github.com/hyperai/tvm-cn) | 664 | 51% | Other | TypeScript | 3,868 | TVM Documentation in Chinese Simplified / TVM 中文文档 |
| [dataelement/bisheng](https://github.com/dataelement/bisheng) | 662 | 51% | Agent / Workflow | Python | 11,779 | BISHENG is an open LLM devops platform for next generation Enterprise AI applications. Pow |
| [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 640 | 49% | Agent / Workflow | Java | 9,390 | Enterprise-grade, commercial-friendly agentic workflow platform for building next-generati |
| [FxPool/FXMinerProxy](https://github.com/FxPool/FXMinerProxy) | 639 | 49% | Other | Go | 3,709 | 🔥minerproxy,minerproxy,minerproxy,minerproxy,minerproxy,minerproxy,minerproxy,minerproxy, |
| [EvilGenius-dot/RustMinerSystem](https://github.com/EvilGenius-dot/RustMinerSystem) | 638 | 49% | Other | Rust | 3,877 | 💰唯一正版💰 minerproxy minerproxy minerproxy minerproxy minerproxy minerproxy minerproxy mine |
| [fudan-generative-vision/hallo](https://github.com/fudan-generative-vision/hallo) | 635 | 49% | Other | Python | 8,658 | Hallo: Hierarchical Audio-Driven Visual Synthesis for Portrait Image Animation |
| [limix-ldm-ai/LimiX](https://github.com/limix-ldm-ai/LimiX) | 630 | 48% | Data Engineering | Python | 3,852 | LimiX: Unleashing Structured-Data Modeling Capability for Generalist Intelligence https:// |
| [PKU-Alignment/align-anything](https://github.com/PKU-Alignment/align-anything) | 599 | 46% | LLM Infra | Python | 4,664 | Align Anything: Training All-modality Model with Feedback |
| [FoundationAgents/MetaGPT](https://github.com/FoundationAgents/MetaGPT) | 580 | 45% | Agent / Workflow | Python | 69,543 | 🌟 The Multi-Agent Framework: First AI Software Company, Towards Natural Language Programm |
| [TJU-DRL-LAB/AI-Optimizer](https://github.com/TJU-DRL-LAB/AI-Optimizer) | 574 | 44% | Other | Python | 3,466 | The next generation deep reinforcement learning tookit |
| [SuanmoSuanyangTechnology/MemoryBear](https://github.com/SuanmoSuanyangTechnology/MemoryBear) | 572 | 44% | Other | Python | 4,903 | MemoryBear Equip AI with human-like memory capability |
| [juggleim/im-server](https://github.com/juggleim/im-server) | 558 | 43% | Other | Go | 3,594 | High-performance, scalable, self-hosted instant messaging server in Go — private chat, gro |
| [yikart/AiToEarn](https://github.com/yikart/AiToEarn) | 553 | 43% | Other | TypeScript | 24,339 | Let's use AI to Earn! |
| [Docta-ai/docta](https://github.com/Docta-ai/docta) | 549 | 42% | Data Engineering | Python | 3,481 | A Doctor for your data |
| [Everlyn-Labs/Everlyn-1](https://github.com/Everlyn-Labs/Everlyn-1) | 549 | 42% | LLM Infra | - | 2,892 | The first open autoregressive foundational video AI model. |
| [TaskingAI/TaskingAI](https://github.com/TaskingAI/TaskingAI) | 546 | 42% | Other | Python | 5,398 | The open source platform for AI-native application development. |
| [risesoft-y9/Digital-Infrastructure](https://github.com/risesoft-y9/Digital-Infrastructure) | 531 | 41% | Other | Java | 2,603 | 数字底座是一款面向大型政府、企业数字化转型，基于身份认证、组织架构、岗位职务、应用系统、资源角色、数据目录、安全控制等功能构建的统一且安全的管理支撑平台。数字底座基于三员管理模式， |
| [dgiot/dgiot](https://github.com/dgiot/dgiot) | 518 | 40% | Data Engineering | Erlang | 4,829 | Open source platform for iot , 6 min Quick Deployment,10M devices connection,Carrier level |
| [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 516 | 40% | Agent / Workflow | Python | 11,594 | One portable memory layer for every AI agent: local-first, Markdown-native, user-owned, an |
| [nesaorg/nesa](https://github.com/nesaorg/nesa) | 496 | 38% | LLM Infra | Python | 3,168 | Run AI models end-to-end encrypted. |
| [Orillusion/orillusion](https://github.com/Orillusion/orillusion) | 491 | 38% | Other | TypeScript | 5,195 | Orillusion is a pure Web3D rendering engine which is fully developed based on the WebGPU s |
| [lakesoul-io/LakeSoul](https://github.com/lakesoul-io/LakeSoul) | 484 | 37% | RAG / Search | Java | 3,243 | LakeSoul is an end-to-end, realtime cloud-native Lakehouse framework for fast data ingesti |

## 兴趣分类

| 分类 | 共现次数 | 占比 |
|---|---:|---:|
| Other | 88747 | 42% |
| Agent / Workflow | 48015 | 23% |
| LLM Infra | 30451 | 15% |
| Data Engineering | 15378 | 7% |
| RAG / Search | 13783 | 7% |
| Dev Tooling | 8217 | 4% |
| Evaluation | 2520 | 1% |
| Data Prep / Dataset | 1709 | 1% |
| Database / Storage | 606 | 0% |

## 原始 Top 30（含泛项目）

| 项目 | 共同用户 | 样本占比 | 分类 | 语言 | Stars | 描述 |
|---|---:|---:|---|---|---:|---|
| [HKUDS/LightRAG](https://github.com/HKUDS/LightRAG) | 724 | 56% | RAG / Search | Python | 38,243 | [EMNLP2025] "LightRAG: Simple and Fast Retrieval-Augmented Generation" |
| [ModelEngine-Group/nexent](https://github.com/ModelEngine-Group/nexent) | 721 | 55% | Agent / Workflow | Python | 5,795 | Nexent is a zero-code platform for auto-generating production-grade AI agents using Harnes |
| [facebookresearch/vggt](https://github.com/facebookresearch/vggt) | 706 | 54% | RAG / Search | Python | 14,038 | [CVPR 2025 Best Paper Award] VGGT: Visual Geometry Grounded Transformer |
| [qualcomm/GenieX](https://github.com/qualcomm/GenieX) | 696 | 54% | LLM Infra | Rust | 8,272 | Run frontier LLMs and VLMs locally on Qualcomm devices across NPU, GPU, and CPU with a few |
| [Oneflow-Inc/oneflow](https://github.com/Oneflow-Inc/oneflow) | 688 | 53% | Agent / Workflow | C++ | 9,417 | OneFlow is a deep learning framework designed to be user-friendly, scalable and efficient. |
| [Klavis-AI/klavis](https://github.com/Klavis-AI/klavis) | 687 | 53% | Agent / Workflow | Python | 5,778 | Klavis AI:  MCP integration platforms that let AI agents use tools reliably at any scale |
| [microsoft/UFO](https://github.com/microsoft/UFO) | 673 | 52% | Agent / Workflow | Python | 9,339 | UFO³: Weaving the Digital Agent Galaxy |
| [Hunyuan-PromptEnhancer/PromptEnhancer](https://github.com/Hunyuan-PromptEnhancer/PromptEnhancer) | 668 | 51% | LLM Infra | Python | 3,737 | [CVPR 2026] PromptEnhancer is a prompt-rewriting tool, refining prompts into clearer, stru |
| [hyperai/tvm-cn](https://github.com/hyperai/tvm-cn) | 664 | 51% | Other | TypeScript | 3,868 | TVM Documentation in Chinese Simplified / TVM 中文文档 |
| [dataelement/bisheng](https://github.com/dataelement/bisheng) | 662 | 51% | Agent / Workflow | Python | 11,779 | BISHENG is an open LLM devops platform for next generation Enterprise AI applications. Pow |
| [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 640 | 49% | Agent / Workflow | Java | 9,390 | Enterprise-grade, commercial-friendly agentic workflow platform for building next-generati |
| [FxPool/FXMinerProxy](https://github.com/FxPool/FXMinerProxy) | 639 | 49% | Other | Go | 3,709 | 🔥minerproxy,minerproxy,minerproxy,minerproxy,minerproxy,minerproxy,minerproxy,minerproxy, |
| [EvilGenius-dot/RustMinerSystem](https://github.com/EvilGenius-dot/RustMinerSystem) | 638 | 49% | Other | Rust | 3,877 | 💰唯一正版💰 minerproxy minerproxy minerproxy minerproxy minerproxy minerproxy minerproxy mine |
| [fudan-generative-vision/hallo](https://github.com/fudan-generative-vision/hallo) | 635 | 49% | Other | Python | 8,658 | Hallo: Hierarchical Audio-Driven Visual Synthesis for Portrait Image Animation |
| [limix-ldm-ai/LimiX](https://github.com/limix-ldm-ai/LimiX) | 630 | 48% | Data Engineering | Python | 3,852 | LimiX: Unleashing Structured-Data Modeling Capability for Generalist Intelligence https:// |
| [PKU-Alignment/align-anything](https://github.com/PKU-Alignment/align-anything) | 599 | 46% | LLM Infra | Python | 4,664 | Align Anything: Training All-modality Model with Feedback |
| [FoundationAgents/MetaGPT](https://github.com/FoundationAgents/MetaGPT) | 580 | 45% | Agent / Workflow | Python | 69,543 | 🌟 The Multi-Agent Framework: First AI Software Company, Towards Natural Language Programm |
| [TJU-DRL-LAB/AI-Optimizer](https://github.com/TJU-DRL-LAB/AI-Optimizer) | 574 | 44% | Other | Python | 3,466 | The next generation deep reinforcement learning tookit |
| [SuanmoSuanyangTechnology/MemoryBear](https://github.com/SuanmoSuanyangTechnology/MemoryBear) | 572 | 44% | Other | Python | 4,903 | MemoryBear Equip AI with human-like memory capability |
| [juggleim/im-server](https://github.com/juggleim/im-server) | 558 | 43% | Other | Go | 3,594 | High-performance, scalable, self-hosted instant messaging server in Go — private chat, gro |
| [yikart/AiToEarn](https://github.com/yikart/AiToEarn) | 553 | 43% | Other | TypeScript | 24,339 | Let's use AI to Earn! |
| [Docta-ai/docta](https://github.com/Docta-ai/docta) | 549 | 42% | Data Engineering | Python | 3,481 | A Doctor for your data |
| [Everlyn-Labs/Everlyn-1](https://github.com/Everlyn-Labs/Everlyn-1) | 549 | 42% | LLM Infra | - | 2,892 | The first open autoregressive foundational video AI model. |
| [TaskingAI/TaskingAI](https://github.com/TaskingAI/TaskingAI) | 546 | 42% | Other | Python | 5,398 | The open source platform for AI-native application development. |
| [risesoft-y9/Digital-Infrastructure](https://github.com/risesoft-y9/Digital-Infrastructure) | 531 | 41% | Other | Java | 2,603 | 数字底座是一款面向大型政府、企业数字化转型，基于身份认证、组织架构、岗位职务、应用系统、资源角色、数据目录、安全控制等功能构建的统一且安全的管理支撑平台。数字底座基于三员管理模式， |
| [dgiot/dgiot](https://github.com/dgiot/dgiot) | 518 | 40% | Data Engineering | Erlang | 4,829 | Open source platform for iot , 6 min Quick Deployment,10M devices connection,Carrier level |
| [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 516 | 40% | Agent / Workflow | Python | 11,594 | One portable memory layer for every AI agent: local-first, Markdown-native, user-owned, an |
| [nesaorg/nesa](https://github.com/nesaorg/nesa) | 496 | 38% | LLM Infra | Python | 3,168 | Run AI models end-to-end encrypted. |
| [Orillusion/orillusion](https://github.com/Orillusion/orillusion) | 491 | 38% | Other | TypeScript | 5,195 | Orillusion is a pure Web3D rendering engine which is fully developed based on the WebGPU s |
| [lakesoul-io/LakeSoul](https://github.com/lakesoul-io/LakeSoul) | 484 | 37% | RAG / Search | Java | 3,243 | LakeSoul is an end-to-end, realtime cloud-native Lakehouse framework for fast data ingesti |

## 口径

- 只分析 2026-07-01 到 2026-07-27 给 OpenDCAI/DataFlow 点 star 的用户。
- 抽样方式：按 7 月新增 stargazer 时间序列等距抽样，避免只看最近几天。
- 每个用户最多取最近 300 个 starred repos；很早以前 star 的项目不会进入本次样本。
- “过滤泛项目”会去掉超大型学习清单、通用 awesome list、面试资料等噪声，但原始 Top 表仍保留。
- GitHub 不提供共同 star 图谱接口，本报告由公开 stargazer 和用户 starred repos 聚合而来。
