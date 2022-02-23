---
title: "Game Pocket Monsters with Nebula Graph"
date: 2021-09-03
description: "In this case, we use the game's publicly available dataset, imported into studio, to show you how to take advantage of the Nebula Graph to demonstrate the value of the graph database."
tags: ["playground"]
author: xiaolang, kun
---

# The relationship of pocket monsters in the game


In this case, we use the game's publicly available dataset, imported into studio, to show you how to take advantage of the Nebula Graph to demonstrate the value of the graph database. Interested users can try it out for themselves (GameMonsters Graph database).

## Quick start.
1. Visit Nebula Playground: [Game_monsters](https://playground.nebula-graph.com.cn/explore?name_space=Game_Monsters)
2. Click on "Start exploring". 3.
3. There are 2 ways to import data.
    > Method 1: VID query, fill in a list of IDs for the following vertices:<br>
      monster001 <br>
      monster002 <br>
      monster003 <br>
      monster025 <br>
      monster026 <br>
      monster133 <br>
      monster134 <br>
      monster135 <br>
      monster136 <br>

    > Method 2: Click on the index query, select the tag and index, add a quantity limit, e.g. 50, click on the plus sign and add an index condition, e.g.

4. By this time the vertices should be displayed, you can double click them, or use the right sidebar to expand the conditions for edge expansion.



## Details.
Game business scenarios often encounter relationship problems, characters and characters, characters and monsters, pets, NPCs, props, etc.

With the traditional form of tables, it is impossible to find the required relationships intuitively, here we take the game as an example, using publicly available data to provide everyone online experience Nebula Graph graph database.

The structure of this game dataset, as shown in the figure:<br
##### Tag: monster, property, person <br>
##### Vertex: 151 monsters, 9 properties, 13 characters <br>
##### Edge: property relationship, damage doubling, damage halving, attribution, evolution relationship <br>

![monsters](https://nebula-website-cn.oss-cn-hangzhou.aliyuncs.com/nebula-website/images/demo/monsters/Frame1.png)


Let's start by looking up something related to a famous 025 yellow monster.
* Go to the studio graph exploration screen.
* The top left corner confirms that we are currently in the Game_Monsters space (the space of the game dataset)
![monsters](https://nebula-website-cn.oss-cn-hangzhou.aliyuncs.com/nebula-website/images/demo/monsters/image001.png)
* Click the Start Exploration button on the right
![monsters](https://nebula-website-cn.oss-cn-hangzhou.aliyuncs.com/nebula-website/images/demo/monsters/image002.png)
* Enter vid: monster025

* Click to confirm
![monsters](https://nebula-website-cn.oss-cn-hangzhou.aliyuncs.com/nebula-website/images/demo/monsters/image003.png)

You can find out the vertex of the yellow charged monster number 025. (VID is monster001 - monster151)

![monsters](https://nebula-website-cn.oss-cn-hangzhou.aliyuncs.com/nebula-website/images/demo/monsters/image004.png)
Double click on the point to automatically expand all related points

For example, you can see the vertex of a certain monster with a longer tail and a charged partner, 026, of the evolutionary relation 025.
![monsters](https://nebula-website-cn.oss-cn-hangzhou.aliyuncs.com/nebula-website/images/demo/monsters/image005.png)

At the same time click on the attribute display button, check the box to select the attributes we need to display, you can see the vertex in the figure corresponding to the value of the attribute. For example: name, attack power, defense power, etc.
![monsters](https://nebula-website-cn.oss-cn-hangzhou.aliyuncs.com/nebula-website/images/demo/monsters/image006.png)

![monsters](https://nebula-website-cn.oss-cn-hangzhou.aliyuncs.com/nebula-website/images/demo/monsters/image007.png)

![monsters](https://nebula-website-cn.oss-cn-hangzhou.aliyuncs.com/nebula-website/images/demo/monsters/image008.png)

In the result of the query, we can also see that there is a vertex for the attribute, and the tag for the monster attribute, with the same name.

> How to build the data structure often needs to be designed by the user

![monsters](https://nebula-website-cn.oss-cn-hangzhou.aliyuncs.com/nebula-website/images/demo/monsters/image009.png)

Clicking on this attribute vertex will automatically expand it, at this vertex we can visually view all the monsters with electric attributes, each vertices shows the corresponding attribute value, and intuitively find all the monsters of the electric family
![monsters](https://nebula-website-cn.oss-cn-hangzhou.aliyuncs.com/nebula-website/images/demo/monsters/image010.png)

With the right sidebar, we can also expand the edges exactly as needed.

For example, keeping only one vertex of the canvas, the electric property
* delete the rest of the vertices of the canvas.
* click on the edge type in the right sidebar and select only damage
* Select outflow for direction, 1 for step, and leave everything else the same
![monsters](https://nebula-website-cn.oss-cn-hangzhou.aliyuncs.com/nebula-website/images/demo/monsters/image011.png)
* This time click the expand button, you can expand the attribute relationship, you can see the relationship of attacking other attributes through the edge, electricity attribute can do double damage to water attribute, but half damage to grass attribute, and very low damage to rock attribute.
![monsters](https://nebula-website-cn.oss-cn-hangzhou.aliyuncs.com/nebula-website/images/demo/monsters/image012.png)


### Now, let's look up the character relationships
By vid query enter

```
person1 
person2 
person3
person4 
person5
person6
person7
person8
person9
person10
person11
person12
person13
```

![monsters](https://nebula-website-cn.oss-cn-hangzhou.aliyuncs.com/nebula-website/images/demo/monsters/image013.png)

From the results, you can see 8 big city dojo directors, former champions, and 4 major divas
![monsters](https://nebula-website-cn.oss-cn-hangzhou.aliyuncs.com/nebula-website/images/demo/monsters/image014.png)

Double click on a person's vertex to see the monsters he has
![monsters](https://nebula-website-cn.oss-cn-hangzhou.aliyuncs.com/nebula-website/images/demo/monsters/image015.png)

Clicking on each monster allows us to quickly expand the relationship and find the attributes that are incompatible with each other
![monsters](https://nebula-website-cn.oss-cn-hangzhou.aliyuncs.com/nebula-website/images/demo/monsters/image016.png)

Double click on the restraining attribute to quickly expand a group of monsters with that attribute, and select the monsters you have to double the damage on the boss's monsters, or select the monsters that halve the damage for defense.
![monsters](https://nebula-website-cn.oss-cn-hangzhou.aliyuncs.com/nebula-website/images/demo/monsters/image017.png)



> #### This is a typical way to use graphs for quick game strategy search, and they have a huge advantage over the traditional table format in terms of correlations.

We hope this public data demo is helpful for you to win the game.

If you are interested in the example, click Quick Start and try it out for yourself. If you want to modify or add data, submit pr to this [repo](https://github.com/Kun8018/nebula-monster-data)

[Game_monsters](https://playground.nebula-graph.com.cn/explore?name_space=Game_Monsters)

Reference.

Studio video presentation https://www.bilibili.com/video/BV1QN411Z7Vh . 

Figure Exploration, Nebula-Studio Manual https://docs.nebula-graph.com.cn/master/nebula-studio/st-ug-toc/ 

nGQL, CRUD manual https://docs.nebula-graph.com.cn/master/2.quick-start/4.nebula-graph-crud
