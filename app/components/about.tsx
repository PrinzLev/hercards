import { client } from "../plugins/sanity/client"
import { IconCards } from "@tabler/icons-react"

const getQuestionCount = async () => {
    const count: number = await client.fetch(
        `count(*[_type == 'question'])`,
        {},
        { cache: "no-cache" }
    )

    return count
}

export default async function About() {
    const questionCount = await getQuestionCount()

    return (
        <div
            className="w-full h-[700px] bg-[#87D3B3] font-semibold flex flex-col items-center justify-between pt-10 lg:pt-20 mt-10 relative"
            id="about"
        >
            <div className="w-3/4 lg:w-1/2 font-semibold text-xs lg:text-base">
                <p>
                    Herd Mentality is a board game designed and produced by{" "}
                    <span>
                        <a
                            target="_blank"
                            href="https://bigpotato.co.uk/"
                            className="underline"
                        >
                            Big Potato Games
                        </a>
                    </span>
                    . The basic premise of the game is being able to think like
                    the majority. A question will come up like &quot;What's the
                    best source of protein?&quot;, you would then need to come
                    up with an answer that you'd think most of the players
                    you're playing with would write down. If you're part of the
                    majority you get a point, otherwise you get nothing. If,
                    however, you were the only one who didn't have a similar
                    answer with anyone else you would then get the pink cow
                    which means you're not allowed to win the game. You would
                    only lose the pink cow if someone else answered differently
                    than everybody else.
                </p>
                <p className="mt-5">
                    The game has been a treat to play. I've played this with 2
                    different sets of people and everyone seems to enjoy it.
                    After finishing the first set of games, one of my friends
                    pointed out how the game cannot be repeated with the same
                    group of people due to having limited amount of questions.
                    That got me thinking, how can I make this game more
                    replayable? Of course as a software engineer, the first
                    thought that came to mind was creating a web app; A web app
                    where people I play Herd Mentality with could access and add
                    questions.
                </p>
            </div>
            <div className="mt-5 p-1 lg:p-2 rounded-lg border border-black">
                <p className="text-sm lg:text-lg flex items-center gap-x-1">
                    Number of{" "}
                    <IconCards color="black" className="w-[12px] lg:w-[19px]" />
                    Available: {questionCount}
                </p>
            </div>
            <div className="py-5">
                <p className="font-semibold text-sm">
                    © 2023 Jericho Irvin Alde
                </p>
            </div>
        </div>
    )
}
