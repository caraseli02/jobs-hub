<script setup lang="ts">
import { GithubLogoIcon } from '@radix-icons/vue'
// import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

// const provider = new GoogleAuthProvider()

// const auth = getAuth()
const makeLogin = () => {
//   signInWithPopup(auth, provider)
//     .then(async (result) => {
//       const token = await result.user.getIdToken()
//       const decodedToken = await result.user.getIdTokenResult()
//       const isNewUser = decodedToken.claims?.mongoId === undefined

//       if (isNewUser) {
//         console.log('New user')
//         await signUpWithFirebase(token)
//       }
//       else {
//         // TODO: Continue the login process
//       }
//     })
//     .catch((error) => {
//       // Handle Errors here.
//       const errorCode = error.code
//       const errorMessage = error.message
//       // The email of the user's account used.
//       const email = error.customData.email
//       // The AuthCredential type that was used.
//       const credential = GoogleAuthProvider.credentialFromError(error)
//       // ...
//     })
}

const makeLoginYes = async () => {
//   try {
//     const data = await $fetch('/api/auth/login', {
//       method: 'POST',
//       body: JSON.stringify({
//         email: 'amzarescu41+student1@gmail.com',
//         password: 'Test123!',
//       }),
//     })
//     if ('token' in data) {
//       const router = useRouter()
//       const token = useCookie('firebaseToken')
//       token.value = data.token
//       // isLoading.value = false;
//       router.push('/')
//     }
//   }
//   catch (error) {
//     console.log(error)
//   }
}

// const signUpWithFirebase = async (token: string) => {
//   try {
//     const data = await $fetch('/api/auth/signup', {
//       method: 'POST',
//       body: JSON.stringify({
//         token,
//       }),
//     })
//     console.log(data)
//     // TODO: Redirect to login page
//   }
//   catch (error) {
//     console.log(error)
//   }
// }
</script>

<template>
  <section class="min-w-[350px] flex flex-col gap-4">
    <div class="grid grid-cols-2 gap-6">
      <Button variant="outline">
        <GithubLogoIcon class="mr-2 h-4 w-4" />
        Github
      </Button>
      <Button
        variant="outline"
        @click="makeLogin"
      >
        <svg
          role="img"
          viewBox="0 0 24 24"
          class="mr-2 h-4 w-4"
        >
          <path
            fill="currentColor"
            d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
          />
        </svg>
        Google
      </Button>
    </div>
    <div class="relative">
      <div class="absolute inset-0 flex items-center">
        <span class="w-full border-t" />
      </div>
      <div class="relative flex justify-center text-xs uppercase">
        <span class="dark:bg-slate-950 px-2 text-muted-foreground"> Or continue with </span>
      </div>
    </div>
    <div class="grid gap-2">
      <Label for="email">
        Email
      </Label>
      <Input
        id="email"
        type="email"
        placeholder="m@example.com"
      />
    </div>
    <div class="grid gap-2">
      <Label for="password">
        Password
      </Label>
      <Input
        id="password"
        type="password"
      />
    </div>
    <div>
      <Button
        class="w-full"
        @click="makeLoginYes"
      >
        Enter
      </Button>
    </div>
  </section>
</template>
