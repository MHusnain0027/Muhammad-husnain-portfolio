import Badge from "@/components/ui/Badge";
import GlassCard from "@/components/ui/GlassCard";


export default function StatusCard(){


return (

<GlassCard

className="
w-full
max-w-sm
"

>


<Badge>

Available For Opportunities

</Badge>



<div className="mt-6">


<h3

className="
text-xl
font-black
text-[var(--foreground)]
"

>

Muhammad Husnain

</h3>



<p

className="
mt-2
text-[var(--text-muted)]
"

>

Security System Operator
&
AI Enthusiast

</p>



</div>



<div

className="
mt-6
flex
items-center
gap-3
text-sm
text-[var(--text-muted)]
"

>


<span

className="
w-3
h-3
rounded-full
bg-[var(--primary)]
shadow-[0_0_15px_var(--primary)]
"

/>


Dubai, UAE

</div>



</GlassCard>

);

}