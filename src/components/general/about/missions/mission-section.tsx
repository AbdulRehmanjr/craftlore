'use client'
import { MISSIONS } from "~/constants"
import { MissionCard } from "~/components/general/about/missions/misson-card"
import { useMissionStore } from "~/hooks/use-mission"


export const MissionSection = () => {
    const { mission } = useMissionStore()
    return (
        <section className="col-span-12 container gap-4 mt-12">
            <div className="container grid grid-cols-4 gap-7 relative -mt-36">
                {
                    MISSIONS.slice(0, 4).map((mission) => (
                        <MissionCard title={mission.title} id={mission.id} description={mission.description} key={mission.id} />
                    ))
                }
            </div>
            <div className="container grid gap-6 my-32">
                <h6 className="text-6xl font-montserrat text-primary">{mission.title}</h6>
                <p className="text-2xl">{mission.description}</p>
            </div>
            <div className="container grid grid-cols-4 gap-7 relative -mb-36">
                {
                    MISSIONS.slice(4, 8).map((mission) => (
                        <MissionCard title={mission.title}  id={mission.id} description={mission.description} key={mission.id} />
                    ))
                }
            </div>
        </section>
    )
}