# 2026-07 DataFlow Stargazer 共同关注分析

生成时间：2026-07-07T04:30:15.004Z

样本：320 / 320 个 7 月新增 stargazer；每人最多读取最近 300 个 starred repos。

## 快速判断

- Top 12 共同关注项目之间的用户集合平均重叠：95%；区间：88% - 100%。
- 这个重叠度很高，说明 7 月新增 stargazer 中存在一批 GitHub star 行为高度相似的人群；它更像同一类信息源/榜单/推荐链路带来的用户，而不是完全随机的自然扩散。
- 共同关注集中在 Agent / Workflow、LLM Infra、RAG / Search，其次才是 Data Engineering。

## 共同关注项目 Top 30（过滤泛项目）

| 项目 | 共同用户 | 样本占比 | 分类 | 语言 | Stars | 描述 |
|---|---:|---:|---|---|---:|---|
| [HKUDS/LightRAG](https://github.com/HKUDS/LightRAG) | 204 | 64% | RAG / Search | Python | 37,396 | [EMNLP2025] "LightRAG: Simple and Fast Retrieval-Augmented Generation" |
| [qualcomm/GenieX](https://github.com/qualcomm/GenieX) | 199 | 62% | LLM Infra | Rust | 8,144 | Run frontier LLMs and VLMs locally on Qualcomm devices across NPU, GPU, and CPU with a few |
| [Klavis-AI/klavis](https://github.com/Klavis-AI/klavis) | 198 | 62% | Agent / Workflow | Python | 5,765 | Klavis AI:  MCP integration platforms that let AI agents use tools reliably at any scale |
| [ModelEngine-Group/nexent](https://github.com/ModelEngine-Group/nexent) | 197 | 62% | Agent / Workflow | Python | 5,505 | Nexent is a zero-code platform for auto-generating production-grade AI agents using Harnes |
| [Oneflow-Inc/oneflow](https://github.com/Oneflow-Inc/oneflow) | 196 | 61% | Agent / Workflow | C++ | 9,409 | OneFlow is a deep learning framework designed to be user-friendly, scalable and efficient. |
| [facebookresearch/vggt](https://github.com/facebookresearch/vggt) | 195 | 61% | RAG / Search | Python | 13,713 | [CVPR 2025 Best Paper Award] VGGT: Visual Geometry Grounded Transformer |
| [Hunyuan-PromptEnhancer/PromptEnhancer](https://github.com/Hunyuan-PromptEnhancer/PromptEnhancer) | 195 | 61% | LLM Infra | Python | 3,719 | [CVPR 2026] PromptEnhancer is a prompt-rewriting tool, refining prompts into clearer, stru |
| [microsoft/UFO](https://github.com/microsoft/UFO) | 190 | 59% | Agent / Workflow | Python | 9,255 | UFO³: Weaving the Digital Agent Galaxy |
| [hyperai/tvm-cn](https://github.com/hyperai/tvm-cn) | 188 | 59% | Other | TypeScript | 3,834 | TVM Documentation in Chinese Simplified / TVM 中文文档 |
| [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 186 | 58% | Agent / Workflow | Java | 8,611 | Enterprise-grade, commercial-friendly agentic workflow platform for building next-generati |
| [dataelement/bisheng](https://github.com/dataelement/bisheng) | 185 | 58% | Agent / Workflow | TypeScript | 11,498 | BISHENG is an open LLM devops platform for next generation Enterprise AI applications. Pow |
| [EvilGenius-dot/RustMinerSystem](https://github.com/EvilGenius-dot/RustMinerSystem) | 184 | 57% | Other | Rust | 3,873 | 💰唯一正版💰 minerproxy minerproxy minerproxy minerproxy minerproxy minerproxy minerproxy mine |
| [fudan-generative-vision/hallo](https://github.com/fudan-generative-vision/hallo) | 182 | 57% | Other | Python | 8,654 | Hallo: Hierarchical Audio-Driven Visual Synthesis for Portrait Image Animation |
| [PKU-Alignment/align-anything](https://github.com/PKU-Alignment/align-anything) | 181 | 57% | LLM Infra | Python | 4,663 | Align Anything: Training All-modality Model with Feedback |
| [FxPool/FXMinerProxy](https://github.com/FxPool/FXMinerProxy) | 174 | 54% | Other | Go | 3,707 | 🔥minerproxy,minerproxy,minerproxy,minerproxy,minerproxy,minerproxy,minerproxy,minerproxy, |
| [limix-ldm-ai/LimiX](https://github.com/limix-ldm-ai/LimiX) | 174 | 54% | Data Engineering | Python | 3,645 | LimiX: Unleashing Structured-Data Modeling Capability for Generalist Intelligence https:// |
| [TaskingAI/TaskingAI](https://github.com/TaskingAI/TaskingAI) | 167 | 52% | Other | Python | 5,390 | The open source platform for AI-native application development. |
| [FoundationAgents/MetaGPT](https://github.com/FoundationAgents/MetaGPT) | 164 | 51% | Agent / Workflow | Python | 69,233 | 🌟 The Multi-Agent Framework: First AI Software Company, Towards Natural Language Programm |
| [juggleim/im-server](https://github.com/juggleim/im-server) | 164 | 51% | Other | Go | 3,585 | A high-performance IM server. |
| [Docta-ai/docta](https://github.com/Docta-ai/docta) | 164 | 51% | Data Engineering | Python | 3,481 | A Doctor for your data |
| [Everlyn-Labs/Everlyn-1](https://github.com/Everlyn-Labs/Everlyn-1) | 158 | 49% | LLM Infra | - | 2,892 | The first open autoregressive foundational video AI model. |
| [TJU-DRL-LAB/AI-Optimizer](https://github.com/TJU-DRL-LAB/AI-Optimizer) | 156 | 49% | Other | Python | 3,464 | The next generation deep reinforcement learning tookit |
| [risesoft-y9/Digital-Infrastructure](https://github.com/risesoft-y9/Digital-Infrastructure) | 155 | 48% | Other | Java | 2,598 | 数字底座是一款面向大型政府、企业数字化转型，基于身份认证、组织架构、岗位职务、应用系统、资源角色、数据目录、安全控制等功能构建的统一且安全的管理支撑平台。数字底座基于三员管理模式， |
| [yikart/AiToEarn](https://github.com/yikart/AiToEarn) | 154 | 48% | Other | TypeScript | 23,236 | Let's use AI to Earn! |
| [SuanmoSuanyangTechnology/MemoryBear](https://github.com/SuanmoSuanyangTechnology/MemoryBear) | 154 | 48% | Other | Python | 4,706 | MemoryBear Equip AI with human-like memory capability |
| [dgiot/dgiot](https://github.com/dgiot/dgiot) | 149 | 47% | Data Engineering | Erlang | 4,826 | Open source platform for iot , 6 min Quick Deployment,10M devices connection,Carrier level |
| [Orillusion/orillusion](https://github.com/Orillusion/orillusion) | 142 | 44% | Other | TypeScript | 5,189 | Orillusion is a pure Web3D rendering engine which is fully developed based on the WebGPU s |
| [lakesoul-io/LakeSoul](https://github.com/lakesoul-io/LakeSoul) | 139 | 43% | RAG / Search | Java | 3,241 | LakeSoul is an end-to-end, realtime cloud-native Lakehouse framework for fast data ingesti |
| [LazyAGI/LazyLLM](https://github.com/LazyAGI/LazyLLM) | 137 | 43% | Agent / Workflow | Python | 3,855 | Easiest and laziest way for  building multi-agent LLMs applications. |
| [nesaorg/nesa](https://github.com/nesaorg/nesa) | 135 | 42% | LLM Infra | Python | 3,166 | Run AI models end-to-end encrypted. |

## 兴趣分类

| 分类 | 共现次数 | 占比 |
|---|---:|---:|
| Other | 21045 | 42% |
| Agent / Workflow | 10691 | 21% |
| LLM Infra | 7602 | 15% |
| Data Engineering | 4002 | 8% |
| RAG / Search | 3509 | 7% |
| Dev Tooling | 1823 | 4% |
| Evaluation | 658 | 1% |
| Data Prep / Dataset | 385 | 1% |
| Database / Storage | 143 | 0% |

## 原始 Top 30（含泛项目）

| 项目 | 共同用户 | 样本占比 | 分类 | 语言 | Stars | 描述 |
|---|---:|---:|---|---|---:|---|
| [HKUDS/LightRAG](https://github.com/HKUDS/LightRAG) | 204 | 64% | RAG / Search | Python | 37,396 | [EMNLP2025] "LightRAG: Simple and Fast Retrieval-Augmented Generation" |
| [qualcomm/GenieX](https://github.com/qualcomm/GenieX) | 199 | 62% | LLM Infra | Rust | 8,144 | Run frontier LLMs and VLMs locally on Qualcomm devices across NPU, GPU, and CPU with a few |
| [Klavis-AI/klavis](https://github.com/Klavis-AI/klavis) | 198 | 62% | Agent / Workflow | Python | 5,765 | Klavis AI:  MCP integration platforms that let AI agents use tools reliably at any scale |
| [ModelEngine-Group/nexent](https://github.com/ModelEngine-Group/nexent) | 197 | 62% | Agent / Workflow | Python | 5,505 | Nexent is a zero-code platform for auto-generating production-grade AI agents using Harnes |
| [Oneflow-Inc/oneflow](https://github.com/Oneflow-Inc/oneflow) | 196 | 61% | Agent / Workflow | C++ | 9,409 | OneFlow is a deep learning framework designed to be user-friendly, scalable and efficient. |
| [facebookresearch/vggt](https://github.com/facebookresearch/vggt) | 195 | 61% | RAG / Search | Python | 13,713 | [CVPR 2025 Best Paper Award] VGGT: Visual Geometry Grounded Transformer |
| [Hunyuan-PromptEnhancer/PromptEnhancer](https://github.com/Hunyuan-PromptEnhancer/PromptEnhancer) | 195 | 61% | LLM Infra | Python | 3,719 | [CVPR 2026] PromptEnhancer is a prompt-rewriting tool, refining prompts into clearer, stru |
| [microsoft/UFO](https://github.com/microsoft/UFO) | 190 | 59% | Agent / Workflow | Python | 9,255 | UFO³: Weaving the Digital Agent Galaxy |
| [hyperai/tvm-cn](https://github.com/hyperai/tvm-cn) | 188 | 59% | Other | TypeScript | 3,834 | TVM Documentation in Chinese Simplified / TVM 中文文档 |
| [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 186 | 58% | Agent / Workflow | Java | 8,611 | Enterprise-grade, commercial-friendly agentic workflow platform for building next-generati |
| [dataelement/bisheng](https://github.com/dataelement/bisheng) | 185 | 58% | Agent / Workflow | TypeScript | 11,498 | BISHENG is an open LLM devops platform for next generation Enterprise AI applications. Pow |
| [EvilGenius-dot/RustMinerSystem](https://github.com/EvilGenius-dot/RustMinerSystem) | 184 | 57% | Other | Rust | 3,873 | 💰唯一正版💰 minerproxy minerproxy minerproxy minerproxy minerproxy minerproxy minerproxy mine |
| [fudan-generative-vision/hallo](https://github.com/fudan-generative-vision/hallo) | 182 | 57% | Other | Python | 8,654 | Hallo: Hierarchical Audio-Driven Visual Synthesis for Portrait Image Animation |
| [PKU-Alignment/align-anything](https://github.com/PKU-Alignment/align-anything) | 181 | 57% | LLM Infra | Python | 4,663 | Align Anything: Training All-modality Model with Feedback |
| [FxPool/FXMinerProxy](https://github.com/FxPool/FXMinerProxy) | 174 | 54% | Other | Go | 3,707 | 🔥minerproxy,minerproxy,minerproxy,minerproxy,minerproxy,minerproxy,minerproxy,minerproxy, |
| [limix-ldm-ai/LimiX](https://github.com/limix-ldm-ai/LimiX) | 174 | 54% | Data Engineering | Python | 3,645 | LimiX: Unleashing Structured-Data Modeling Capability for Generalist Intelligence https:// |
| [TaskingAI/TaskingAI](https://github.com/TaskingAI/TaskingAI) | 167 | 52% | Other | Python | 5,390 | The open source platform for AI-native application development. |
| [FoundationAgents/MetaGPT](https://github.com/FoundationAgents/MetaGPT) | 164 | 51% | Agent / Workflow | Python | 69,233 | 🌟 The Multi-Agent Framework: First AI Software Company, Towards Natural Language Programm |
| [juggleim/im-server](https://github.com/juggleim/im-server) | 164 | 51% | Other | Go | 3,585 | A high-performance IM server. |
| [Docta-ai/docta](https://github.com/Docta-ai/docta) | 164 | 51% | Data Engineering | Python | 3,481 | A Doctor for your data |
| [Everlyn-Labs/Everlyn-1](https://github.com/Everlyn-Labs/Everlyn-1) | 158 | 49% | LLM Infra | - | 2,892 | The first open autoregressive foundational video AI model. |
| [TJU-DRL-LAB/AI-Optimizer](https://github.com/TJU-DRL-LAB/AI-Optimizer) | 156 | 49% | Other | Python | 3,464 | The next generation deep reinforcement learning tookit |
| [risesoft-y9/Digital-Infrastructure](https://github.com/risesoft-y9/Digital-Infrastructure) | 155 | 48% | Other | Java | 2,598 | 数字底座是一款面向大型政府、企业数字化转型，基于身份认证、组织架构、岗位职务、应用系统、资源角色、数据目录、安全控制等功能构建的统一且安全的管理支撑平台。数字底座基于三员管理模式， |
| [yikart/AiToEarn](https://github.com/yikart/AiToEarn) | 154 | 48% | Other | TypeScript | 23,236 | Let's use AI to Earn! |
| [SuanmoSuanyangTechnology/MemoryBear](https://github.com/SuanmoSuanyangTechnology/MemoryBear) | 154 | 48% | Other | Python | 4,706 | MemoryBear Equip AI with human-like memory capability |
| [dgiot/dgiot](https://github.com/dgiot/dgiot) | 149 | 47% | Data Engineering | Erlang | 4,826 | Open source platform for iot , 6 min Quick Deployment,10M devices connection,Carrier level |
| [Orillusion/orillusion](https://github.com/Orillusion/orillusion) | 142 | 44% | Other | TypeScript | 5,189 | Orillusion is a pure Web3D rendering engine which is fully developed based on the WebGPU s |
| [lakesoul-io/LakeSoul](https://github.com/lakesoul-io/LakeSoul) | 139 | 43% | RAG / Search | Java | 3,241 | LakeSoul is an end-to-end, realtime cloud-native Lakehouse framework for fast data ingesti |
| [LazyAGI/LazyLLM](https://github.com/LazyAGI/LazyLLM) | 137 | 43% | Agent / Workflow | Python | 3,855 | Easiest and laziest way for  building multi-agent LLMs applications. |
| [nesaorg/nesa](https://github.com/nesaorg/nesa) | 135 | 42% | LLM Infra | Python | 3,166 | Run AI models end-to-end encrypted. |

## 口径

- 只分析 2026-07-01 到 2026-07-07 给 OpenDCAI/DataFlow 点 star 的用户。
- 抽样方式：按 7 月新增 stargazer 时间序列等距抽样，避免只看最近几天。
- 每个用户最多取最近 300 个 starred repos；很早以前 star 的项目不会进入本次样本。
- “过滤泛项目”会去掉超大型学习清单、通用 awesome list、面试资料等噪声，但原始 Top 表仍保留。
- GitHub 不提供共同 star 图谱接口，本报告由公开 stargazer 和用户 starred repos 聚合而来。
