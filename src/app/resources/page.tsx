import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next"
import { getServerSession } from "next-auth"
import { getProviders, signIn } from "next-auth/react"

export async function getServerSideProps(context:GetServerSidePropsContext){
    const session = await getServerSession(context.req, context.res, authOptions)

    if (session) {
        alert("You are logged in already")
    }
    const providers= await getProviders()
    
    return {
        props: {providers : providers ?? []}
    }
}

export default function ProviderSignIn({ providers }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
      <>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button onClick={() => signIn(provider.id)}>
              Sign in with {provider.name}
            </button>
          </div>
        ))}
   ß   </>
    )}
        

