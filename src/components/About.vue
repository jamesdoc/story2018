<template>
  <main class="about">
    <h1>What’s your story?</h1>
    <p>London is full of people, and people are full of stories. Every sleepy-eyed commuter on a crowded tube; every red-cheeked runner on a foggy morning; every coffee-infused student in your lecture theatre. Millions of people, and millions of stories. And yet we know so few of them. For all the stories that surround us, there are so few people who stop to listen to them.</p>
    <p>What comes to mind when someone asks for your story? The stand out memories of your childhood, the people you love and care about, or the places you’ve been? Maybe it’s the scars you bear, the loved ones you’ve lost, or the pain you can’t forget. Perhaps the career that you aspire to, the person you’re in love with, or the future you dream of?</p>
    <p>The thing is, if you want to truly understand a person, you need to listen to their story. Why do they like what they like, or say what they say, or feel what they feel? Where does their motivation come from? What gives them hope? How do they answer life’s deepest questions? It’s easy to see that we are all shaped by our perception of our place in the world, and our experiences as we journey through it.</p>

    <h1>So how about you? What’s your story?</h1>
    <p>Does life have any deeper meaning? Do you feel truly content? What gives you hope for the future? How do you comfort yourself when times are hard? What happens after you die? These are all questions that face us as human beings, but the answers are difficult. However you’d respond, or even if you just don’t know, Story is for you.</p>
    <p>Story is a chance to share, and a chance to listen. We want to hear what you have to say. We want to know what you find hard, and what you think you’ve worked out. Whatever your background and whatever your beliefs, we think that your story is valuable.</p>

    <h1>Whoever you are, and whatever your story, there’s a story that we want to tell you too.</h1>
    <p>Throughout the week, a huge variety of people will be sharing stories of life, meaning and faith. They’ll be telling us of how they found hope, deep happiness, and contentment. Some of them have transformed completely as their stories have unfolded. But all of them have one thing in common- a greater story that they, and we, want to share.</p>
    <p>The reason we want to tell you, is because we think it good news for you. This story brings meaning, and freedom, and satisfaction- and in a way that’s like nothing else we’ve ever known. Maybe you can tell us something better- you’re very welcome to! But maybe, just maybe, what we’ve got to say is something you need to hear.</p>
    <p>This is the story of Jesus. A man like no other, with a story like no other. He spoke in a way no one else had before. Allegedly, he did things no one has ever done before, or since. And his story ripples through time in a way that can completely rewrite yours.  Maybe after all, it is just a story. But maybe, this Jesus has something to offer you…</p>

    <router-link :to="{ name: 'Location' }" class="event_btn">
      Come to an event
    </router-link>
  </main>
</template>

<script>
export default {
  name: 'About',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .about {
    position: absolute;
    top: 0;
    overflow-y: scroll;
    height: 100vh;
    padding: 0 15px;
    text-align: left;
    background-size: cover;
    background: url('/static/img/paper.jpg') no-repeat;
  }

  .about h1 {
    font-size: 28px;
    letter-spacing: 3px;
    text-transform: uppercase;
    max-width: 800px;
  }

  .about p {
    font-family: serif;
    font-size: 16px;
    line-height: 28px;
    max-width: 800px;
  }

  .about p:first-child {
    font-size: 20px;
    line-height: 32px;
  }

  .event_btn {
    margin-bottom: 100px;
    color: #c62127;
    text-transform: lowercase;
    text-decoration: none;
    border-bottom: 2px solid #c62127;
    display: inline-block;
    transition: padding .2s;
  }

  .event_btn:hover {
    padding-bottom: 2px;
  }

   @media (min-width: 800px) {
    .about {
      padding-top: 25px;
    }

    .about h1, .about p {
      margin-left: 55px;
    }

    .event_btn {
      display: block;
      max-width: 800px;
      margin: 0 55px 100px;
    }
   }
</style>
