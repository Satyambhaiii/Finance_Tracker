import { UserButton } from "@clerk/nextjs"
import { useGetAccounts } from "@/features/accounts/api/use-get-accounts"

"use client"

import { useNewAccount } from "@/features/accounts/hooks/use-new-account";
import { Button } from "@/components/ui/button";
import { Datagrid } from "@/components/data-grid";
import { DataCharts } from "@/components/data-charts";

export default function DashboardPage() {
  const {onOpen} = useNewAccount();
  return(
    <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
        <Datagrid/>
        <DataCharts/>
    </div>
  )
}



// export default function Home() {
//   const {data:accounts,isLoading} = useGetAccounts(); 
//   if(isLoading){
//     return (
//       <div>
//         Loading...
//       </div>
//     );
//   }

//   return(
//     <div>
//          { accounts?.map((account)=>(
//            <div key={account.id}> 
//            {account.name};
//            </div>
//          ))}
//     </div>
//     // <UserButton afterSignOutUrl=""></UserButton>
//    )
// }
