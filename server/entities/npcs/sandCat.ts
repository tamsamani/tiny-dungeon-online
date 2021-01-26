import { Npcs } from '../../Enums.ts'
import NpcBase from './npcBase.ts'
import BluriteHelm from '../items/bluriteHelm.ts'
import IronHelm from "../items/ironHelm.ts"
import IronLegs from "../items/ironLegs.ts"

export default class SandCat extends NpcBase {
    constructor() {
        super(Npcs.SandCat, true, 'sandcat', 0, 0, 0, 30, 10000, 0.25, 6, 36, null, [new BluriteHelm(0.2), new IronHelm(0.8), new IronLegs(0.8)], null)
    }
}