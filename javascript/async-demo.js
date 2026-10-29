async function getOctaneInfo(){
    try{
        const userRes=await fetch("https://api.github.com/users/octocat")
    //  console.log(userRes)   
        if(!userRes.ok)throw new Error("Failed")
            // console.log(userRes.json())
        const user=await userRes.json()

    // console.log(user)

        console.log(`Name ${user.name}, Public repo:${user.public_repos}`)

        const reposRes=await fetch(user.repos_url)
        if(!reposRes.ok)throw new Error("Failed")

        const repos= await reposRes.json()

        const top3Repos= repos.slice(0,3).map(repo=>repo.name)
        console.log(`First 3 repos: ${top3Repos.join(",")}`)
    }catch(error){
        console.log("Failed to fetch info",error)
    }
}

getOctaneInfo()