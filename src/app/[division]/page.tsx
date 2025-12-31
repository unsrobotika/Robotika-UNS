import Divisi from "@/components/ui/subdivisi/divisi";
import { TECH_DIVISIONS, NON_TECH_DIVISIONS, DivisionItem } from "@/lib/data";


export default async function Page({
    params
}:{
    params: Promise<{ division: string }>
}){
    const { division } = await params;
    const data = ["desain","elektronis","pemrograman","rnd"]
    const status = data.includes(division) ? TECH_DIVISIONS : NON_TECH_DIVISIONS;
    const i = status.findIndex(x => x.id === division)

    return (
        <div>
            <Divisi division={status[i]} accentColor={status === TECH_DIVISIONS? "purple": "cyan" }/>
        </div>
    )
}


