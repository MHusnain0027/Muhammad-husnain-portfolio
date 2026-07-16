import Heading from "@/components/ui/Heading";
import GlassCard from "@/components/ui/GlassCard";

import profile from "@/components/data/profile";


export default function AboutContent(){

return (

<div>


<Heading

eyebrow="About Me"

title="Building Secure Systems With Technology"

description={profile.headline}

/>



<GlassCard>


<p

className="
text-[var(--text-muted)]
leading-relaxed
"

>

{profile.about}

</p>




<p

className="
mt-5

text-[var(--text-muted)]

leading-relaxed

"

>

{profile.summary}

</p>




<p

className="
mt-5

text-[var(--text-muted)]

leading-relaxed

"

>

My goal is to create intelligent solutions that connect
security operations, automation and artificial intelligence
to solve real-world problems.

</p>



</GlassCard>


</div>

);

}