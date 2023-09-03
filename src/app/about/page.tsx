import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m San Limbu.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            I’m San Limbu. I live in London, I am working to be a trader.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
            Trading can be a challenging but rewarding endeavor. Whether you're interested in stocks, commodities, forex, cryptocurrencies, or any other financial instruments, here are some steps and tips to help you on your journey to becoming a trader:

Educate Yourself: Start by gaining a solid understanding of financial markets, trading strategies, and the instruments you want to trade. There are many books, online courses, and resources available to help you learn the basics.

Choose Your Market: Decide which financial market(s) you want to trade in. Different markets have different characteristics and require different strategies. Common markets include stocks, forex, commodities, and cryptocurrencies.

Select a Trading Style: Determine your trading style. Are you a day trader, swing trader, or a long-term investor? Each style has its own timeframes and strategies.

Create a Trading Plan: Develop a well-thought-out trading plan that includes your goals, risk tolerance, entry and exit strategies, and position sizing rules. A good trading plan is crucial for managing risk and staying disciplined.

Practice with a Demo Account: Before risking real money, practice your trading strategies on a demo account provided by most brokerage platforms. This allows you to gain experience without financial risk.

Choose a Reliable Broker: Select a reputable brokerage that suits your needs. Consider factors such as fees, available markets, trading platforms, and customer support.

Risk Management: Always prioritize risk management. Never risk more than you can afford to lose on a single trade. Use stop-loss orders to limit potential losses.

Continuous Learning: Stay updated on market news and trends. The financial markets are constantly evolving, and staying informed is essential.

Emotional Control: Emotions can often lead to poor trading decisions. Develop emotional discipline and stick to your trading plan even when emotions are running high.

Keep Records: Maintain a trading journal to record your trades, strategies, and outcomes. This helps you analyze your performance and make improvements.

Start Small: When you begin trading with real money, start with a small amount and gradually increase your position size as you gain confidence and experience.

Adapt and Learn: Be prepared to adapt your strategies as market conditions change. Continuous learning and adjustment are key to long-term success.

Network and Learn from Others: Join trading communities or forums, attend webinars or seminars, and network with experienced traders. Learning from others' experiences can be invaluable.

Patience and Discipline: Trading can be both exciting and frustrating. Stay patient and disciplined, and avoid impulsive decisions.

Legal and Tax Considerations: Familiarize yourself with the tax implications of trading in your country and ensure you comply with all legal requirements.

Remember that trading involves risks, and not every trade will be profitable. It's important to approach trading with a realistic mindset and be prepared for losses along the way. With dedication, continuous learning, and disciplined execution, you can work towards becoming a successful trader.





Regenerate

            </p>

          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://twitter.com/santoshlimbu" icon={TwitterIcon}>
              Follow on Twitter
            </SocialLink>
            <SocialLink href="#" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink
              href="mailto:san@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              san@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
