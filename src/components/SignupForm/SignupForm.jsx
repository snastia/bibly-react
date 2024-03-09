import { useEffect, useState } from "react"

export function SignupForm(){

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        console.log("vukluk useeffect")
        return () => {
            
        }
    }, [name, password])

    const handleChange = (e) => {
        const name = e.currentTarget.name
        switch(name){
            case "name":
                setName(e.currentTarget.value)
                return;
            case "password":
                setPassword(e.currentTarget.value)
                return;

                default:
                    return;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        e.currentTarget.reset()
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Name
                <input type="text" name="name" id=""/>
            </label>
            <br/>
           <label>
             Password
           <input type="password" name="password"/>
           </label>
           <br/>
           <button type="submit">Submit</button>
        </form>
    )
}