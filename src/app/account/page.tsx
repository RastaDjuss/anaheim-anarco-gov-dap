// src/app/account/page.tsx
import AccountListFeature from '@/components/account/account-list-feature'
import { CreateTransaction } from '@/components/account/CreateTransaction'

export default function Page() {
  return (
    <>
      <AccountListFeature />
      <CreateTransaction />
    </>
  )
}
