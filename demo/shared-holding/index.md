---
title: "Nebula Shareholding Example"
date: 2021-07-06
description: "A generated dataset to demostrate how relationships could be explored with nebula graph"
tags: ["playground"]
author: wey
---

This is a generated dataset with two kinds of vertices and four kinds of edges(relationships):

person can hold a corp in {share} %
person can be relative with another person
corp can hold another corp in {share} %
corp can be a branch of another corp
person can be as a role of a corp

![modeling](https://nebula-website-cn.oss-cn-hangzhou.aliyuncs.com/nebula-website/images/demo/shared-holding/modeling.png)

Within the playground, you can visually explore the shareholding data from select vertices(i.e. "c_132" with the name "Chambers LLC") by selecting:

![studio_explore_0](https://nebula-website-cn.oss-cn-hangzhou.aliyuncs.com/nebula-website/images/demo/shared-holding/studio_explore_0.png)

click this explored vertex dot, then you can explore from select vertices by selecting:

- Edge Type
- Direction
- Steps
- Query Limit(Optional)

> note, you can click the 👁️ icon to add options to show fields of the graph,

![studio_explore_1](https://nebula-website-cn.oss-cn-hangzhou.aliyuncs.com/nebula-website/images/demo/shared-holding/studio_explore_1.png)

After clicking Expand, you will see all queried relations with c_132 the Chambers LLC.

![studio_explore_2](https://nebula-website-cn.oss-cn-hangzhou.aliyuncs.com/nebula-website/images/demo/shared-holding/studio_explore_2.png)

Alternatively, you could query nGQL via console like:

```ngql
GO 1 TO 3 STEPS FROM "c_132" over * BIDIRECT;
```

Read for more of the dataset, refer to https://github.com/wey-gu/nebula-shareholding-example

Download sample dataset: [shareholding-dataset](https://www.kaggle.com/littlewey/nebula-graph-shareolding-dataset)

