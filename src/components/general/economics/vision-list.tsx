import { PURPOSEVISION } from "~/constants"






export const VisionList = ()=>{

    return(
        <div className="grid grid-cols-3 gap-6">
        {
            PURPOSEVISION.map((vission,index)=>(
                <div className="bg-white border-4 border-secondary rounded-xl hover:shadow-lg p-8" key={index}>
                    <p className="font-opensans text-xl leading-[31px]">
                        <b>{vission.title}</b> {vission.description}
                    </p>
                </div>
            ))
        }
    </div>
    )
}