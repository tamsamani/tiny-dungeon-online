export enum Command {
    Login = 1,
    Move,
    Ping,
    Pong,
    Error,
    NpcMove,
    NpcsInRoom,
    Pve,
    ItemsInRoom,
    ItemPick,
    ItemDrop,
    ItemUse,
    ItemWear,
    ItemRemove,
    ItemDroped,
    Stats,
    Message,
    Dialog,
    Rank,
    Chat,
    Save,
    Load,
    UpdatePlayerId,
    Exit,
    EraseSave
}

export enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
}

export enum Rooms {
    InitialRoom = 0,
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
    Woods23,
    River4,
    River5,
    River6,
    River7,
    Plains6,
    Plains7,
    Plains8,
    Plains9,
    River1,
    River2,
    River3,
    Plains10,
    Plains11,
    Plains12,
    Mages,
    Plains13,
    Plains14,
    Desert1,
    Plains15,
    Plains16,
    Plains17,
    Plains18,
    Merchants,
    Plains19,
    Desert2,
    Desert3,
    Desert4,
    Desert5,
    Subitnof1,
    Subitnof2,
    Plains20,
    Sadlac,
    Plains21,
    Plains22,
    Desert6,
    Desert7,
    Desert8,
    Desert9,
    Subitnof3,
    Subitnof4,
    Plains23,
    Plains24,
    Plains25,
    Plains26,
    Desert10,
    Desert11,
    Desert12,
    Desert13,
    Plains27,
    Plains28,
    Plains29,
    Plains30,
    Plains31,
    Plains32,
    Desert14,
    Desert15,
    Kharjid,
    Desert16,
}

export enum Npcs {
    Dog = 1,
    Chicken,
    Cow,
    Horse,
    Horse2,
    Camel,
    Spider,
    ImpMeelee,
    ImpArcher,
    ImpMage,
    Slime,
    Bee,
    Witch,
    Goblin,
    Goblin2,
    Goblin3,
    Ligneus,
    Skeleton,
    SkeletonKnight,
    Rat,
    ButterFlew,
    GrassSnake,
    Document,
    EvilEye,
    WaterBlob,
    Ogre,
    AdamantGhost,
    FireBlob,
    SandCat,
    SandSnake,
    Zombie,
    CursedCactus,
    SandSpirit,
    SandTotem,
    Demon,
    Demon2,
    Zero,
    FemaleGnome,
    MaleGnome,
    AncientGnome,
    WhiteMaleFarmer,
    BlackMaleFarmer,
    WhiteFemaleFarmer,
    BlackFemaleFarmer,
    OldMan,
    MytklashsFlower,
    Wizard1,
    Wizard2,
    Wizard3,
    Merchant1,
    Merchant2,
    CityMale1,
    CityMale2,
    CityMale3,
    CityMale4,
    CityMale5,
    CityMale6,
    CityMale7,
    CityMale8,
    CityMale9,
    CityOldMale1,
    CityOldMale2,
    CityFemale1,
    CityFemale2,
    CityFemale3,
    CityGuard,
    DesertMale1,
    DesertMale2,
    DesertMale3,
    DesertMale4
}

export enum PveAttacker {
	Player = 0,
    Npc,
}

export enum Items {
    Empty = 0,
    Coffee,
    Coin,
    WoodenDagger,
    WoodenSword,
    BronzeDagger,
    BronzeSword,
    IronDagger,
    IronSword,
    BluriteDagger,
    BluriteSword,
    AdamantDagger,
    AdamantSword,
    FireDagger,
    FireSword,
    WoodenHelm,
    BronzeHelm,
    IronHelm,
    BluriteHelm,
    AdamantHelm,
    FireHelm,
    WoodenArmour,
    BronzeArmour,
    IronArmour,
    BluriteArmour,
    AdamantArmour,
    FireArmour,
    WoodenLegs,
    BronzeLegs,
    IronLegs,
    BluriteLegs,
    AdamantLegs,
    FireLegs,
}

export enum ItemType {
    Money = 0,
    Consumable,
    Weareable,
    Temporary
}

export enum GearType {
    None = 0,
    Head,
    Torso,
    Legs,
    Weapon
}

export enum Quests {
    FlowerForMytklash,
    HelpTheVillage
}

export enum StepType {
    MonstersToKill,
    NpcToTalk,
    LevelToReach
}

export enum RewardType {
    Xp,
    Item
}