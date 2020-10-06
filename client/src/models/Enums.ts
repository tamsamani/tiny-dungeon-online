export enum Direction {
    Up = 1,
    Down = 2,
    Left = 3,
    Right = 4,
}

export enum Command {
    Login = 1,
    Move = 2,
    Ping = 3,
    Pong = 4,
    Error = 5,
    NpcMove = 6,
    NpcsInRoom = 7,
    Pve = 8,
    ItemsInRoom = 9,
    ItemPick = 10,
    ItemDrop = 11,
    ItemUse = 12,
    ItemWear = 13,
    ItemRemove = 14,
    ItemDroped = 15,
    Stats = 16,
    Message = 17,
    Dialog = 18,
    Rank = 19
}

export enum Rooms {
    Initial = 0,
    Woods,
    Woods2,
    Woods3,
    Woods4,
    Woods5,
    Woods6,
    Woods7,
    Woods8,
    River14,
    Woods9,
    Woods10,
    Woods11,
    Gnomes1,
    Gnomes2,
    Woods12,
    Woods13,
    River12,
    DeepLake,
    River13,
    Woods14,
    Woods15,
    Woods16,
    Gnomes3,
    Gnomes4,
    Woods17,
    River10,
    River11,
    Plains1,
    Plains2,
    Woods18,
    Woods19,
    Woods20,
    Woods21,
    Woods22,
    River8,
    River9,
    Plains3,
    Plains4,
    Plains5,
    GoblinCamp,
}

export enum PveAttacker {
    Player = 0,
    Npc = 1,
}

export enum ItemsIds {
    Empty = 0,
    Coffee = 1,
    Coin = 2,
    BronzeDagger = 3
}

export enum GearType {
    None = 0,
    Head,
    Torso,
    Legs,
    Weapon
}