const enum Tiles {
    Tree = 1,
    SmallTree = 2
}

export const SolidLayers = {
    InitialRoom: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, Tiles.Tree, 0, Tiles.Tree],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, Tiles.SmallTree, Tiles.Tree, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, Tiles.Tree, 0, 0, 0, 0, 0, 0, 0, Tiles.SmallTree, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, Tiles.SmallTree, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, Tiles.Tree, 0, 0, 0, 0, Tiles.Tree, 0, 0, Tiles.SmallTree],
        [0, 0, Tiles.Tree, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, Tiles.SmallTree, 0, 0, 0, 0, Tiles.Tree, 0, 0, Tiles.SmallTree, 0],
        [Tiles.Tree, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [Tiles.SmallTree, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [Tiles.Tree, Tiles.Tree, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, Tiles.Tree],
    ],
    Woods: [
        [Tiles.Tree, 0, 0, 0, 0, 0, 0, 0, Tiles.Tree, 0, 0, 0, 0, Tiles.Tree, 0, 0],
        [0, 0, 0, Tiles.SmallTree, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, Tiles.Tree, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, Tiles.SmallTree, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, Tiles.SmallTree, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, Tiles.Tree, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, Tiles.Tree, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, Tiles.SmallTree, 0],
        [Tiles.Tree, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, Tiles.Tree, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, Tiles.SmallTree, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, Tiles.Tree, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, Tiles.Tree, 0, 0, Tiles.Tree, 0, 0, 0, 0, 0, 0],
        [Tiles.SmallTree, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    Woods2: [
        [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
         [0 ,Tiles.Tree ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
         [0 ,0 ,0 ,0 ,0 ,Tiles.SmallTree,0 ,0 ,Tiles.Tree ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
         [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,Tiles.Tree ,0 ,Tiles.Tree ,0 ,0 ],
         [0 ,0 ,Tiles.Tree ,Tiles.SmallTree,0 ,0 ,0 ,0 ,0 ,0 ,0 ,Tiles.Tree ,0 ,0 ,Tiles.SmallTree,0 ],
         [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
         [0 ,0 ,0 ,0 ,0 ,0 ,0 ,Tiles.Tree ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
         [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,Tiles.SmallTree,0 ,0 ,0 ],
         [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
         [0 ,0 ,0 ,Tiles.Tree ,0 ,0 ,0 ,0 ,0 ,Tiles.SmallTree,0 ,0 ,0 ,0 ,0 ,0 ],
         [0 ,0 ,Tiles.Tree ,0 ,0 ,Tiles.Tree ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
         [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,Tiles.Tree ,0 ,Tiles.SmallTree,Tiles.Tree ,0 ,0 ],
         [0 ,0 ,0 ,0 ,Tiles.SmallTree,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,Tiles.Tree ,0 ,0 ],
         [0 ,Tiles.Tree ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
         [0 ,0 ,0 ,0 ,Tiles.Tree ,0 ,0 ,0 ,Tiles.Tree ,0 ,0 ,Tiles.Tree ,0 ,0 ,0 ,0 ],
         [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
    ],
}