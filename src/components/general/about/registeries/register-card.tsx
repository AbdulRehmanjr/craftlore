import { useRegister } from "~/hooks/use-register"
import { cn } from "~/lib/utils"

type RegisterProps = {
    title: string
    id: number,
    description: string
}

export const RegisterCard = ({ title, id, description }: RegisterProps) => {

    const { register, setRegister } = useRegister()
    return (
        <div className={cn('border-4 border-secondary flex flex-col justify-center pt-16 px-5 pb-7 rounded-lg shadow-lg bg-white h-[250px] group hover:bg-secondary cursor-pointer',
            register.id == id && "bg-secondary text-white"
        )}
            onClick={() => setRegister({ id: id, title: title, description: description })}
        >
            <p className={cn("text-2xl font-montserrat text-primary group-hover:text-white",
                register.id == id && "text-white"
            )}>{title}</p>
            <p className="text-left text-sm group-hover:text-white">See more</p>
        </div>
    )
}