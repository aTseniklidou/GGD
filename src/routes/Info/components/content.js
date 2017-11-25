import React from 'react'
import { Help } from './components'

const questions = [
  {
    question: "So many different colors and icons...I don't understand a thing!",
    answer: "I don't blame you! The information is kind of dense to save space for mobile (even though it is not fully responsive yet) " +
    "plus I am not a ux/ui designer so don't hate me. :'( " +
    "By pressing the top right button twice you can change the view to a table which simplifies the display. " +
    "If you prefer the grid and list views here is a table explaining the not-so-obvious color codes and icons. ",
    extra: <Help />,
  },
  {
    question: "I have some information on a game/team but I am not sure if it's in the scope of the database.",
    answer: "If it is a digital game (video game, serious game, etc) then it probably is. " +
    "The database includes both released and under development games or games published once but no longer available. " +
    "The only type of game not supoorted for the time being are betting games. " +
    "Any teams (not necessarily companies) or people creating games are also welcome. " +
    "I will also be creating a list with tools and assets sometime soon, so you can share information on that too. " +
    'Here is a list with the kind of information that the database currently supports. ',
    extra: <ul>
              <li>For games:</li>
                <ul>
                  <li>name</li>
                  <li> an image/logo. Send a url to the image, not the image itself </li>
                  <li>status: released, under developement, unavailable, beta and release year if there is one </li>
                  <li>tags for filtering: genre (see the filter for available genres), style (2d, 3d, vr, ar), modes (local multiplayer, online multiplayer, single player) </li>
                  <li>developers and publishers name</li>
                  <li>media links: websites, facebook, indiedb, twitter, youtube, linkedin</li>
                  <li>For released games only, links to platforms it was released to: app store, play store, windows store, pc, available demo, online</li>
                </ul>
              <li>For teams: </li>
              <ul>
                <li>name</li>
                <li> an image/logo. Send a url to the image, not the image itself </li>
                <li>status: active, inactive and year founded</li>
                <li>location: country (if not based in Greece) or town</li>
                <li>their games if any</li>
                <li>media links: websites, facebook, indiedb, twitter, youtube, linkedin</li>
              </ul>
          </ul>
  },
  {
    question: "Some of the data here is outdated, wrong or missing..are you going to update it?",
    answer: "I am actively tending to this site so if anything catches my attention, I'll take care of it as soon as possible. " +
    "However, there are bound to be mistakes and missing info due to the large scale of the data (it is hard to keep track of everything on my own) " +
    "so your help in keeping the content fresh is invaluable. If you spot anything suspicious don't hesitate to contact me. " +
    "Use the info button on the top left of the card to send me corrections or additions for that card. " +
    "If you want to add something new let me know via the get-in-touch contact form",
  },
  {
    question: 'Who is behind this?',
    answer: "It's just me for now. I am a software engineer with a passion for games and I created this site out of love for the community. " +
    "I created a list of game development teams a long time ago intended for personal use but since some people found it useful, " +
    "I decided to make it more formal and complete. " +
    "On the way though, I have used other online resources and help that I should give credit to. You can check them out at the table following this FAQ.",
  },
  {
    question: 'I like this initiative, how can I help?',
    answer: "Any info you share is really helping me out in maintaining the database and saving me valuable time so that I can focus on developing more features. " +
    "If you are a developer too and have worked or want to work with any of these technologies: React, Redux, Node, Postgres then perhaps we can join forces! " +
    "If you don't have time to spare but want to support the site no matter what, then you can consider donating. Regardless, the content is free for you to view! " +
    "Last but not least you can vote on the polls to help me decide on what feature to implement next!"
},
]
export default questions