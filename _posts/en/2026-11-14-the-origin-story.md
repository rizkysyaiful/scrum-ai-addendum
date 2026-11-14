---
title: "The Origin Story"
description: "It started next to a hospital bed. How a proxy Product Owner, a pre-AI structure and AI development speed led to Scrum: AI Addendum."
ref: origin-story
authors: [ricky]
---
{%- assign t = site.data[page.lang] -%}

*This post is personal. It is 100% my own view.*

It all started next to a hospital bed.

On October 13, I visited my Product Owner in the hospital. He had just had a mild stroke.

The headaches had been there for months. Then, on the afternoon of October 12, his cheek went numb, and the headache got stronger.

> I keep him anonymous here. This story is not about him as a person. It is about the structure he was standing in.

He is a hard worker. For three months, he slept late almost every night, and spent his Sundays detailing the product spec for our weekly Sprint Planning.

He did that alone. For six big apps that all connect to each other.

On my way home, I felt guilty. I'll tell you why later, because the reason surprised me too.

First, here is what I concluded that night:

> My PO was the victim of a **pre-AI structure** meeting **AI development speed**.

Let me unpack that, one piece at a time.

## Piece 1: the pre-AI structure

My PO, like most POs I know in Indonesia, does not own the product.

The real owner is his boss. His boss delegates the tactical work to him, and trusts him to compile the direction from himself and his colleagues.

His boss and his boss's colleagues are also users of some of the apps. They also lead the teams that will use the rest.

<figure class="fig">
<svg viewBox="0 0 440 306" role="img" aria-label="The real product owner talks to the proxy PO, who talks to the developers. There is no direct contact between the developers and the real owner.">
<defs><marker id="f1a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="3.8" markerHeight="3.8" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="f-head"/></marker></defs>
<rect class="f-box" x="16" y="14" width="270" height="66" rx="12"/>
<text class="f-t" x="151" y="42" text-anchor="middle">Real product owner</text>
<text class="f-s" x="151" y="64" text-anchor="middle">his boss + top management</text>
<line class="f-line" x1="151" y1="86" x2="151" y2="114" marker-start="url(#f1a)" marker-end="url(#f1a)"/>
<rect class="f-hot" x="16" y="120" width="270" height="70" rx="12"/>
<text class="f-t" x="151" y="150" text-anchor="middle">Proxy PO</text>
<text class="f-s" x="151" y="173" text-anchor="middle" style="fill:#0f2a20">6 apps · late nights · Sundays</text>
<line class="f-line" x1="151" y1="196" x2="151" y2="224" marker-start="url(#f1a)" marker-end="url(#f1a)"/>
<rect class="f-box" x="16" y="230" width="270" height="62" rx="12"/>
<text class="f-t" x="151" y="267" text-anchor="middle">Developers</text>
<path class="f-dash" d="M290 261 C 370 261, 380 47, 290 47"/>
<path class="f-x" d="M344 144 L364 164 M364 144 L344 164"/>
<text class="f-s f-red" x="372" y="149">no direct</text>
<text class="f-s f-red" x="372" y="167">contact</text>
</svg>
<figcaption>The pre-AI structure. Everything between the real owner and the developers goes through one person.</figcaption>
</figure>

This is the classic **proxy PO**, or scribe PO. It's a "Scrum-but", for sure.

But let's be fair. At pre-AI speed, this structure can work well enough for years, even decades. That is why almost every team I hear about runs with a proxy PO: a PO without the real power.

Building was slow, so one person had enough time to turn the real owner's wishes into tickets before the team ran out of work.

## Piece 2: AI development speed

Then AI arrived in our project.

In the first month or two, most of us saw AI-powered development up close for the first time. Some of the developers had never touched an agentic tool like Claude Code.

And we naturally leaned toward one thing: doing **more work**. Not doing more UAT. Not pushing for beta testing as soon as possible.

Why? Simple: a limited budget and a big ambition.

Some things outside our control happened too. For example, we found out we couldn't rely on a vendor for the HQ's ERP app, so we had to move people to build it ourselves.

<figure class="fig">
<svg viewBox="0 0 440 272" role="img" aria-label="Before AI, build speed and the specs one PO must write are small and fit under one person's limit. With AI, both grow about five times and go far past one person's limit, while time with users actually shrinks.">
<line class="f-limit" x1="234" y1="30" x2="234" y2="262"/>
<text class="f-s" x="234" y="20" text-anchor="middle">one person's limit</text>
<text class="f-k" x="12" y="50">PRE-AI</text>
<text class="f-s" x="150" y="77" text-anchor="end">Build speed</text>
<rect class="b-build" x="160" y="63" width="56" height="18" rx="4"/>
<text class="f-s" x="150" y="105" text-anchor="end">Specs to write</text>
<rect class="b-spec" x="160" y="91" width="56" height="18" rx="4"/>
<text class="f-s" x="150" y="133" text-anchor="end">Time with users</text>
<rect class="b-users" x="160" y="119" width="56" height="18" rx="4"/>
<text class="f-k" x="12" y="176">WITH AI</text>
<text class="f-s" x="150" y="203" text-anchor="end">Build speed</text>
<rect class="b-build" x="160" y="189" width="270" height="18" rx="4"/>
<text class="f-s" x="422" y="203" text-anchor="end" style="fill:#082419;font-weight:700">≈ 5×</text>
<text class="f-s" x="150" y="231" text-anchor="end">Specs to write</text>
<rect class="b-spec" x="160" y="217" width="74" height="18" rx="4"/>
<rect class="b-over" x="234" y="217" width="196" height="18" rx="4"/>
<text class="f-s" x="332" y="231" text-anchor="middle" style="fill:#082419;font-weight:700">burnout zone</text>
<text class="f-s" x="150" y="259" text-anchor="end">Time with users</text>
<rect class="b-users" x="160" y="245" width="24" height="18" rx="4"/>
<text class="f-s f-red" x="250" y="259">less than before</text>
</svg>
<figcaption>Same structure, new speed. The specs one person must write grew with the build speed. Time with users actually shrank, because our attention went to delivering more. (An illustration of the mechanism, not measured data.)</figcaption>
</figure>

Here is an analogy. Think of a car factory that upgrades its assembly line to run five times faster.

Great news, right? But every car on that line still needs a drawing from one designer. And no customer test-drives anything until the end of the month.

The line is not the bottleneck anymore. **The car designer is.** So the designer stays up late, works on Sundays, and keeps feeding the line, until his body says stop.

## So, should he just work less?

That's the obvious answer.

Rest more. Hire a second PO. Manage his time better.

But wait, is that really right?

There is actually a benefit to having one person connect six coupled apps (eight, if we include the ERP and the HCMS). Splitting that job between two POs would open new gaps between the apps.

And the root cause is not competency. It is not work ethic either. In fact, a work ethic that is too high is also a problem: it hides a broken structure for longer.

> When the speed changes, the structure has to change with it. Otherwise, the most dedicated person in the structure pays the price.

## Why I felt guilty

As a Scrum Master, I believed I could have made his life easier.

I could have pushed harder for refinement where developers talk directly with the users. In our case, that means the bosses of the future users.

I did mention it, once or twice. But that was it.

The PO himself didn't buy the idea. He seemed to prefer "protecting" the team from top management. And as a contractor on a project-based contract, I felt I didn't have access to top management either.

Looking back, I failed in two ways:

1. I failed to see the **systemic change**: the old structure could not survive the new speed.
2. Before the project started, I failed to explicitly position myself as a **consultant for the whole process and organization**, not the helper of the proxy PO.

The Scrum Guide is clear about the second one. The Scrum Master serves the organization too, including by:

{% include quote.html key="sm_barriers" t=t %}

## A friend who asked the uncomfortable question

Once I saw that the root cause was structural, I remembered something from a month earlier.

On September 14, one of the contributors in our Agile community shared an article with a bold question: if AI can finish the work in two days, [why do we still run two-week Sprints?](https://daus95.com/2026/09/14/ai-bisa-selesai-dalam-2-hari-kenapa-kita-masih-pakai-sprint-2-minggu/)

His point was close to my story. AI compresses days of building into hours, but delivery doesn't speed up, because reviews, approvals, testing and feedback still run on the old clock. **The bottleneck has moved from writing code to humans deciding.**

He also knew some of us would not like it. This is how he shared it in our community group:

<figure class="fig fig-img"><img src="{{ '/assets/images/ahmad-whatsapp-sep14.jpg' | relative_url }}" alt="WhatsApp message from Ahmad Firdaus, September 14, sharing his article and writing: I'm ready to get scolded by the masters here for questioning the value of the Sprint." width="1144" height="582" loading="lazy"><figcaption>His message in our community group, September 14. In English: “I'm ready to get scolded by the masters here for questioning the value of the Sprint 😌”</figcaption></figure>

We agilists are human, after all. We embrace change in the product. Accepting change in the Agile concept itself is harder.

That contributor was [Ahmad Firdaus](https://daus95.com).

## A busy man, and a framework I didn't want to call agile

I told myself: I need to talk with Mr. Ahmad, soon.

He is from my alma mater too. The first time I met him, I was a student pitching in a competition, and he was one of the judges, representing the practitioners.

And he is not just another practitioner. His company, eComindo, was born in 1999, in the early wave of Indonesian software houses, and it is still standing today.

He is a busy person, so I wanted to be concise and respect his time. Before meeting him, I tried to crystallize my thinking first.

I ended up creating a new framework. (I avoided calling it "agile".)

## The surprise

His response surprised me.

The AI-friendly framework I proposed was still aligned with the Scrum Guide. More than that: it was the real, idealistic version of the Scrum Guide.

He encouraged me to consider teaching it to the world as an **addition to Scrum**, not a replacement.

I told him what I liked about that suggestion: we might easily find allies in the existing Agile community. Nobody has to throw away what they have learned. And it could bring new energy to our monthly Agile meetups.

<figure class="fig">
<svg viewBox="0 0 440 330" role="img" aria-label="The real Product Owner sets the business outcome. Developers, including the former proxy PO, meet users in as many rounds as needed inside a Sprint. The Scrum Master serves the whole organization.">
<defs>
<marker id="f3a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="3.8" markerHeight="3.8" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="f-head"/></marker>
<marker id="f3h" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="3.2" markerHeight="3.2" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="f-head-hot"/></marker>
</defs>
<rect class="f-org" x="8" y="8" width="424" height="314" rx="18"/>
<text class="f-k" x="26" y="34">THE ORGANIZATION</text>
<text class="f-s" x="26" y="53">the Scrum Master serves all of it</text>
<rect class="f-box" x="100" y="66" width="240" height="64" rx="12"/>
<text class="f-t" x="220" y="94" text-anchor="middle">Product Owner</text>
<text class="f-s" x="220" y="116" text-anchor="middle">the real owner, with real P&amp;L</text>
<line class="f-line" x1="175" y1="134" x2="110" y2="208" marker-end="url(#f3a)"/>
<line class="f-line" x1="265" y1="134" x2="330" y2="208" marker-end="url(#f3a)"/>
<text class="f-s" x="220" y="176" text-anchor="middle">business outcome</text>
<text class="f-s" x="230" y="208" text-anchor="middle" style="fill:#0f2a20;font-weight:700">rounds as needed</text>
<rect class="f-box" x="18" y="220" width="180" height="84" rx="12"/>
<text class="f-t" x="108" y="254" text-anchor="middle">Developers</text>
<text class="f-s" x="108" y="277" text-anchor="middle">incl. the ex-proxy PO</text>
<rect class="f-dark" x="262" y="220" width="160" height="84" rx="12"/>
<text class="f-t f-on-dark" x="342" y="254" text-anchor="middle">Users</text>
<text class="f-s f-on-dark" x="342" y="277" text-anchor="middle">the real ones</text>
<line class="f-thick" x1="208" y1="262" x2="252" y2="262" marker-start="url(#f3h)" marker-end="url(#f3h)"/>
</svg>
<figcaption>What we aim for. The real owner sets the business outcome, developers meet users in as many rounds as needed inside a Sprint, and the Scrum Master serves the whole organization, because the real Product Owner (with real P&amp;L responsibility) is now in the room.</figcaption>
</figure>

## The rest is history

That conversation became [Scrum: AI Addendum]({{ '/' | relative_url }}): four additions to Scrum, nothing removed, each one checked word for word against the Scrum Guide.

If you are a PO working Sundays to keep up with a team that suddenly builds five times faster, this might save your future health. If you are a Scrum Master who feels something is off but can't name it yet, this is for you too.

Change is not easy, and systemic change is even harder. You will need to learn new things: how to talk to users, agentic engineering, and top-notch engineering practices as your safety net.

Your job title might change too. It's not easy. Here is what I believe:

> At the end of the day, your business is just a group of people trying to solve problems. When the speed changes, protect the people by changing the structure.

I'm still learning to be the Scrum Master I should have been in that project. We're all a work in progress.

So you don't have to figure this out alone. Come to a free monthly Agile meetup, share your concerns, and learn from each other. One of them is [Padepokan Agile](https://www.instagram.com/padepokanagile/).

Does this story sound familiar to you? Bring it there.
