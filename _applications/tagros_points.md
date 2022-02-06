---
title: Tagros points
name: Tagros points
tools: [Flutter]
image: /assets/images/tagros.png
description: A counter for tarot card French game (and with a variant for more people)
---

A counter for tarot card French game (and with a variant for more people)

## What is this app about?
### What is tagros?
Tarot is a classical French card game, competitively played with 4 players (with variants for 3 and 5 players), designed in different rounds, where the "attack" plays against the "defense", in order to win a certain amount of points. The attack and defense are different in each round.

> The [full rules](https://fftarot.fr/assets/documents/Reglement%20FFT.pdf) can be found on [the official website](https://fftarot.fr/).

Tagros (note the different orthography) -- literally meaning tarot-gros, which means "Big tarot" -- is a variant designed by colleagues at work, in order to be able to play with more players at once, up to 10. It changes the amount of players in the attack and the defense, is played with 2 decks of cards, and the way the game works is slightly altered in order to accommodate for more players.

### Reasoning for this app
**This is the app to count the points for "Tagros" and Tarot, for 3-5 players and 7-10 players.** (6 players is not a viable number for the game, for the balance of it, as well as for the gameplay)

In order to win, we have to accumulate a certain amount of points (usually 1000) by playing games until one player attains this amount. In one game, the players agree on a contract during the bidding phase, or the winner of the bid becomes the attacker in that game (with or without partners, depending on the number of players and the distribution of cards), and the rest becomes the defense.

To simplify, a contract is worth different points (it is a multiplier as a matter of fact), and we have different other ways of earning additional points, such as:
* One at the end (counted as points to be multiplied)
* Handful (added after the multiplier is applied)
    * simple
    * double
    * triple

The amount of points that a camp (defense or attack) has to reach in a game in order to win it is different, depending on the number of "oudlers" (3 special cards) that you have won in your tricks.

As all these rules for counting points accumulate, such an application to count the points becomes almost necessary in order to save time and concentrate on playing, and not counting the points.

### Shortcomings
This application does not take into account "chelem", which is when one camp wins all the tricks in a game, because it happens so rarely that the effort-to-gain ratio wasn't worth it.