"use client"


import {ClerkProvider, useAuth, SignInButton, SignIn, SignedIn, SignedOut, RedirectToSignIn} from "@clerk/nextjs";
import {ConvexProviderWithClerk} from "convex/react-clerk";
import {AuthLoading, Authenticated, ConvexReactClient, Unauthenticated} from "convex/react"
import LoadingLogo from "@/components/shared/LoadingLogo";



type Props = {
  children: React.ReactNode;
}

const CONVEX_URL = process.env.NEXT_PUBLIC_CONVEX_URL || "";
const CLERK_PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || "";

const convex = new ConvexReactClient(CONVEX_URL);

const ConvexClientProvider = ({children}: Props) => {

  return( 
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY} dynamic>
    <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
      <SignedIn>
         <Authenticated>{children}</Authenticated>
         <AuthLoading>
            <LoadingLogo />
         </AuthLoading>
         
      </SignedIn>
      <SignedOut>
          <RedirectToSignIn />
      </SignedOut>
    </ConvexProviderWithClerk>
  </ClerkProvider>
  );
  
}

export default ConvexClientProvider;



