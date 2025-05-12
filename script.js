const categoryColors = {
    war: "#FF073A",         // Neon red for 'war'
    discovery: "#39FF14",   // Neon green for 'discovery'
    default: "#0ff",           // Default color (cyan) for other categories
    Political:"#39FF14",
    Foreign_Policy_International: "#FF073A", 
    Social: "#ADD8E6",
    Economic: "#FFB6C1"
    
};
  
const popup = document.getElementById("popup");
const popupText = document.getElementById("popup-text");
const popupClose = document.getElementById("popup-close");

popupClose.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent triggering toggle
    popup.style.display = "none";
    currentPopupItem = null;
  });
  

// Function to show the popup
function showPopup(content) {
  popupText.textContent = content;  // Set the content in the popup
  popup.style.display = "flex";      // Show the popup
}
const learnData = {
   Russia: [
      { year: "1900-1917", content: "Before 1917 Tsar ruled through edicts (ukase) and advised by ministers who were unable to act without Tsar's approval. He was dependent on nobility and imperial bureaucracy and the worlds largest army (6 million in 1914 and 12 million by end of first world war.", category: "Political" },
      { year: "1900-1917", content: "There was a strict surveillance on the general population with high censorship. The Okhrana had unlimited power to carry out raids and arrests. They would imprison or exile any with anti-tsarist behaviours.", category: "Political" },
      { year: 1905, content: "Opposition groups to the Tsar pressured the autocratic society in the wake of the defeat in war with Japan, with the Tsr conceding the October Manifesto, promising an elected representative assembly (state Duma).", category: "Political" },
      { year: 1906, content: "Before the First Duma met in May, the Tsar issued the fundamental Laws, reaffirming his autocracy.", category: "Political" },
      { year: "1900-1917", content: "Opposition groups: The Liberals - moderate reform and constitutional monarchy such as Constitutional Democrats (Kadets) and the Octobrists. The Social Revolutionaries - Formed in 1901, groups aiming to improve peasantry in the 1860s. There was some terrorist branches. The Social democrats: All Russian Social Democrat Labour party founded in 1898 Based off Karl Marx. In 1903 party split when Vladimir Ulyanov (Lenin) won a vote in favour of strong disciplined organisation of revolutionaries. His followers were the Bolsheviks", category: "Political" },
      { year: "1900-1917", content: " Marx (1818-83) was a German Jew who wrote the Communist Manifesto in 1848, translated into Russian in 1869. Marxist Stage Theory: Stage 1 - no classes or private property (hunters and gatherers). Stage 2 - imperialism where man rose to the top and land owning aristocracy was created. Stage 3 - Feudalsim where land owned exploited by peasantry. Stage 4 - capitalism where merchants obtained political control and exploited workers. Stage 5 - Workers took control in sharing foods, goods and services according to needs (socialism). Stage 6 - communism where all join together for common good. Money and states no longer needed.", category: "Social" },
      { year: "1900-1917", content: "Lenin lived from 1870-1924 and supported marxism. He was brought to the attention of the secret police due to this. He was in exile in Siberia when social democrat party founded (1898) but wrote programme for it. He also founded revolutionary newspaper (Iskra meaning spark) and developed a strong underground party network.  ", category: "Political" },
      { year: 1917, content: "Leon Trotsky - Founded St Petersburg Soviet in 1905. Also chaired the Petrograd Soviet and organised the Military Revolutionary Committee, planning the Bolshevik takeover in October. In 1929 he was expelled from the party by Stalin and murdered by a Stalinist agent in Mexcio in 1940.", category: "Social" },
      { year: 1917, content: "Strikes in Petrograd. Cause: unemployment, starvation. Course: 14th Feb 100,000 workers from 58 factories went on strike. News that bread would be rationed from 1st March brought violent exchanges. 23rd -24th Feb: 90,000 workers on strike and 50 factories closed. 240,000 students, women, men and workers on streets. Singing of La Marseillaise. 27th Feb - Soldiers onto streets, 40 demonstrators killed. Mutiny in Volynskii regiment of soldiers, sergeant shooting his commanding officer. 66,000 soldiers mutinied. Duma set up a 12 man provisional committee to take over govt.  ", category: "Social" },
      { year: 1917, content: "Formation of the Petrograd Soviet and Provisional Government. Each regiment elected committees sending representative to the soviet, agreeing control of Petrograd Soviet. 3000 members by 10th March, key leader Alexander Kerensky. Grand Duke Mikhail relinquished political authority to Provisional Government. Dual authority between petrograd and provisional, each with different wings of Tauride Palace.", category: "Political" },
      { year: 1917, content: "Abdication of Tsar Nicholas II (2nd March)", category: "Political" },
      { year: 1917, content: "Return of Lenin (3rd April), and April Theses - Bolsheviks previously a small party of 23000 members, 40 representatives in the Soviet and major leaders in exile. First to reach Petrograd were Kamenev and Stalin. Lenin mapped his programme in -letters from afar- wanting a second revolution. This was later reissued as April Theses. Wanted no support for provisional government, war immediately ending, power transferred to soviets, all land owned by state. Bolshevik party not under Lenin's control at this stage. By the end of April Lenin had won over the majority of the Central committee of the Bolshevik party. ", category: "Political" },
      { year: 1917, content: "Initial support for Bolshevik party compared to provisional government low - at the first all russian congress of soviets meeting in Petrograd on 3rd June confidence was given for the provisional govt by 543 votes to 126.", category: "Political" },
      { year: 1917, content: "Trotsky joins Bolshevik on the 2nd July", category: "Political" },
      { year: 1917, content: "July Day Riots: sailors at Kronstadt naval base had armed demonstration using Bolshevik slogans. Lenin could not condemn, nor support as premature revolution too risky. Tried for a peaceful protest however shots fired at protestors. Provisional govt brought in reinforcements to destroy protest. Lenin and Stalin fled, Trotsky and Kamenev arrested and imprisoned. Bolshevik newspaper Izvestia denounced leaders. with Lenin's reputation fell for fleeing. On 8th July Kerensky became PM - the Bolsheviks moment appeared to have passed.", category: "Political" },
      { year: 1917, content: "Attempted coup by Kornilov: Brusilov led a major offensive in Galicia, however huge Russian losses. Anti war sentiment and desertions rife so he enforced death penalty on deserters. Kerensky called a Moscow state conference to demonstrate unity however Bolsheviks boycotted due to death penalty and other measures. Some who still wanted land ownership, particularly the right saw Kornilov as their saviour. August 1917 saw Kornilov order 6 regiments to march to petrograd, establishing militray dictatorship. Kerenesky panicked and ordered Kornilov to call a halt. When he didnt, Kerensky released imprisoned Bolsheviks and coup leaders were arrested. This saw a rise in Bolshevik membership from 23,000 in Feb to 200,000 by October, with a force of 10,0000 red guards. They won majority in Petrograd and Moscow in Sept and on 26th Sept Trotsky became chairman of exec committee for Petrograd Soviet. ", category: "Political" },
      { year: 1917, content: "Bolshevik seizure of power (25th October) - Commissars sent to all petrograd garrisons uand 15/18 swore allegiance to soviet rather than provisional government. Comittee came to have 200,000 red guards, 60,000 baltic sailors and 150,000 petrograd garrison units. 24-25th October sees the taking over of key buildings and communication centres in petrograd. Remaining members of provisional government arrested, with the congress adopting Lenin's decree on peace and land. There was also the first soviet govt - Soviet of people's commissars', with Lenin as chair. Few deaths <5, due to provisional govt having few military resources. In fact, the revolution only had 25000 actively involved at most.", category: "Political" },
      { year: 1917, content: "Decrees on Peace and Land - end to war without annexation and indemnities (armistice in Nov and demobilisation process in Dec. Abolishment of private land ownership, legitimised peasant seizures without compensation to land lords. Workers decree establishing max 8 hour day, press decree banning opposition press, social insurance decree providing old age, health and unemployment benefits. He also abolished titles and class ranks, established a new legal system, outlawed sex discrimination and removed marriage and divorce from church control.", category: "Political" },
      { year: 1917, content: "Establishment of Sovnarkom - 500 of 670 delegates voted in favour of a socialist government, Mensheviks and social revolutionaries were dismayed to find majority of seats in this Soviets of People's Commissars (Sovnarkom) went to Bolsheviks. Trotsky was commissar for foreign affairs. Peace talks with Germans, and Sovnarkom met 1/2 times a day.  ", category: "Political" },
      { year: 1917, content: "Formation of the Cheka", category: "Political" },
      { year: 1918, content: "Treaty of Brest-Litovsk 3rd March 1918 caused Russia to lose Finland, Estonia, Latvia, Lithuania, Poland, Bessarabia, Georgia, Belarus and Ukraine. This was 1/6 of Russias population, 1/3 of agricultural produce. 3 billion in war reparations to Germany also.", category: "Political" },
      { year: 1918, content: "The Constituent Assembly forcibly dissolved - 41 million votes in elections for constituent assembly in 1917, with the socialist revolutionaries having 21.8 million votes (53%) and bolshevik 10 million (24%). Lenin declares we must not be deceived by the election figures. Election proves nothing. Then the constituent assembly was forcibly closed. Civilians demonstrated and 12 killed. ", category: "Political" },
      { year: 1918, content: "Start of Civil War - lots of population turned against Bolsheviks - right said Bolsheviks had no right to rule, centre said they hadn't submitted to popular elections and those on left said they ignored soviet who helped them into power. Some liked tsarist regime.", category: "Political" },
      { year: 1918, content: "First Soviet constitution - July 1918. Supreme power rested with All-Russian congress of soviets. Central executive committee was organ of power and acted like a President. Congress elected Sovnarkom. Limitations included that vote was reserved for toiling classes (not businessme, tsarist officials etc), workers vote weighted 5 to 1 against peasants, officialy central comittee appointed by congress, in practice however it was by Bolshevik's central committee. July 1918 sees Tsar murdered in Urals.", category: "Political" },
      { year: 1918, content: "Civil war continued - Nov Kolchak declares himself supreme ruler of Russia amongst first White advancement westwards. 1919 october sees high point of Denikins advance, 200 miles from Moscow and Yudenich's to outskirts of Petrograd. 1920, Kolchak shot, Denikins army evacuates to Crimea. 1922 sees end with Constitution of Union of Soviet Socialist republics adopted in December. Trotsky used whatever it took to win war, hiring 50,000 former tsarist soldiers, using cheka to shoot deserters. Reasons for bolshevik success include the Reds commanding hubs of communication. with Whites dispersed in less developed parts. Also, white generals operated independently, and often were incompetent. Red had more peasant sympathies due to land policies. ", category: "Political" },
      { year: "1920-1924", content: "Govt Structure - Soviet govt had sovnarkom 15-20 members --> central committee making laws --> congress of soviets --> provincial and city soviets --> local and district soviets. Communist party had: politburo - 7-9 members from central committee --> central committee --> congress --> provincial parties --> local parties.", category: "Political" },
      { year: 1919, content: "Comintern established - Third communist international - organisation promoting Marxism. First held in Moscow 1919 with 50 delegates from all over Europe, US, Australia and Japan. Lenin was a dominating influence. Despite failure of spartacist uprising, many believed Germany was also ready for revolution.", category: "Foreign Policy/International" },
      { year: 1920, content: "Russo-Polish War (part of civil war) - Russia also excluded from League of Nations in 1919, Chicherin paving way for reintegration in foreign affairs via Treaty of Rapallo April 1922.", category: "Foreign Policy/International" },
      { year: 1921, content: "Kronstadt Revolt - food crisis 1921 caused strikes and riots, with workers protesting against a lack of representation in trade unions.30000 sailors at kronstadt naval base revolted, despite being some of most loyal supporters in Oct revolution. Red army shot leaders of revolt, with 15000 being taken prisoner.", category: "Social" },
      { year: 1921, content: "Red terror  -extreme force against political enemies through Cheka rounding up SR's and menshevicks, often shooting them. Estimated half a million executed between 1918-1920.", category: "Political" },
      { year: 1921, content: "Tenth Party Conference- The Tenth Congress of the Russian Communist Party (Bolsheviks), held in March 1921, was a pivotal moment in Soviet history, taking place amid economic crisis and social unrest following the Russian Civil War. The Congress introduced the New Economic Policy (NEP), marking a significant shift from the strict policies of War Communism to a mixed economy that allowed limited private trade and small-scale private enterprise in order to revive the shattered economy. One of the most consequential political decisions was the adoption of a ban on factions within the Communist Party, aimed at preserving unity but effectively suppressing internal dissent and consolidating Lenin's control. This Congress occurred in the wake of the Kronstadt Rebellion, a mutiny by previously loyal sailors demanding political reform, which underscored the urgency of addressing widespread discontent. Overall, the Tenth Congress set the stage for a more pragmatic approach to governance while also tightening the Party's internal discipline.", category: "Political" },
      { year: 1921, content: "Launch of new economic policy - Gosplan in Feb - requisitioning of grain ended and ban on private trading removed. 1923 tax to state for peasants. State kept control of large scale heavy industry such as steel and coal, small scale would return to private hands. Rationing ended and industries enforced to pay workers out of profits.By 1926 production levels of 1913 had been reached again. 25,000 private traders in Moscow by 1925, responsible for 75% of trade but resented by Bolsheviks.", category: "Economic" },
      { year: 1921, content: "Ban on Factions - cemented the idea of a leader who commanded loyalty and confidence in the party line.", category: "Political" },
      { year: "1921-22", content: "Widespread Famine - resulting in the deaths of an estimated five million people. It was caused by a combination of severe drought, the economic and social disruption from the Russian Civil War, and the harsh policies of War Communism, particularly forced grain requisitioning that left peasants with little incentive to produce surplus food. The famine hit hardest in the Volga and Ural regions, where entire villages were wiped out, and reports of cannibalism and people selling their children highlighted the desperation. Although the Bolshevik government was initially reluctant to acknowledge the crisis, it eventually accepted foreign assistance, most notably from the American Relief Administration, which provided food to millions. ", category: "Economic" },
      { year: 1922, content: "Stalin elected General Secretary - This was around the time where Lenin's strokes began and a Triumvirate of Kamenev, Stalin and Zinoviev had formed to block the ambitions of Trotsky.", category: "Political" },
      { year: 1922, content: "Treaty of Rapallo - waive claims for compensation for WW1, reopening of formal diplomatic relations, mutual goodwill in commercial and economic relations. Between Germany and Russia.", category: "Foreign Policy/International" },
      { year: 1922, content: "Testament dictated by Lenin - In the final months of his life, Vladimir Lenin dictated a series of notes between December 1922 and January 1923, known collectively as Lenin’s Testament, in which he offered a critical assessment of the future of the Soviet leadership. Aware of his declining health after multiple strokes, Lenin expressed concerns about the concentration of power in the hands of Joseph Stalin, recommending that he be removed from his position as General Secretary due to his rudeness and excessive authority. An example of this was Stalin's dissent and crushing of Georgia. He told party members it was a popular uprising, however had actually used brute force to destroy Georgia. He also criticized other leading Bolsheviks, including Trotsky, Zinoviev, and Kamenev, though he regarded Trotsky as the most capable among them, despite his arrogance. Lenin feared that infighting among these leaders could threaten the stability of the revolution. Though the Testament was meant to guide the future of the party, it was suppressed after Lenin’s death in 1924, especially by Stalin and his allies, who saw it as a threat to their power. Its eventual publication years later revealed Lenin’s deep anxieties about the direction the Soviet Union was taking.", category: "Political" },
      { year: 1924, content: "Zinoviev Letter - conspirators used to influence opinion about labour party.", category: "Foreign Policy/International" },
      { year: 1924, content: "Lenin's death - This was a catalyst for a power struggle between members such as Trotsky and Stalin and others. Trotsky's position somewhat weakened in 1924-25, however seeing Stalin's growing popularity keyy figures such as zinoviev and kamenev broke with Stalin and joined Trotsky. Some disliked Trotsky due to him being later to convert to Bolshevism from Menshevism. He also made serious errors of judgement such as attacking the Party bureaucracy in 1924 when he needed its support. Another key candidate was Zinoviev who was chairman of the comnitern and a member of the poltiburo and had been high in Lenins favour who called him his closest and most trusted assisstant. His main weakness was how late he and Kamenev left it before switching their alliance from Stalin. There was also some contenders from the right such as Bukharin - widely regarded as the best theoritician in the bolsheviks. He however, seriously underestimated Stalin and left it too late to make alliance with Zinoviev and Kamenev. Similarly, Rykov shared many of Bukharin's views, and had much support from the Sovnarkom as deputy chair in 1923 and chair in 1924. He was less popular than Bukharin and he had argued against Lenin about revolutionary tatics in 1917 which was held against him and others who did the same such as Kamenev and Zinoviev. Tomsky was a final potential successor as an Old Bolshevik and chief spokesman for trade unions as general secretary of Red International of the trade unions from 1920 and part of central committee and poltiburo in 1922. His main weakness was his hostility to Trotsky, leading to his alliance with Stalin and made him a key part of the purge of left wingers from the party in 1926.,", category: "Political" },
      { year: 1924, content: "Causes for political disputes: Lenin's new economic policy of 1921 was a contradiction to marxist theory and revolutionary socialism. The left such as Trotsky wanted to abandon NEP, the right believed it should continue. Stalin's opinion was inconsistent - a left leaning position from 1925, continuance until 1928 and then a shift back to a policy of replacing NEP in 1928-29. Another key issue was the idea of a permanent revolution, where it was believed through Marxist-leninism that a revolution could not survive in a single country and needed worldwide change. It was essential therefore to trigger a chain reaction of other revolutions. However, the revolutions in Germany and Hungary were crushed and defeat in the Russo-Polish war blocked this in the west. The left (Trotsky) believed the Soviet union should still commit to permanent revolution, while Stalin came to the more pragmatic view that there could be socialism in one country.", category: "Political" },
      { year: 1925, content: "At the central committee in Jan Trotsky was forced from his post as People's commissar for war and Zinoviev proposed he should be expelled from the party, however Stalin had a more lenient approach. The triumvirate broke down and Kamenev and Zinoviev openly opposed Stalin in central committee of sept 1925 alongside a direct attack on Stalin at the 14th party congress of December. This led to Zinoviev and Kamenev being pushed towards joining Trotsky, whom they had argued strongly against. Stalin and Bukharin formed a partnership known as the duumvirate from 1926-27 which virtually ruled the country.", category: "Political" },
      { year: 1926, content: "United Opposition formed from the left opposition, with key members being Trotsky, Zenoviev and Kamenev. There was also a war of words in this infighting between Stalin and left opposition, known as the literary discussion where the main contenders wrote a flood of books and pamphlets. Trotsky did not win the war of words as expected, as Stalins line appealed to the majority of party members. In December 1926 Stalins frustrations led him to offer to resign as general secretary. Trotsky and co also increased pressure on Stalin in 1927 where Stalin was blamed for the crushing of chinese communists in Canton and Shanghai.", category: "Political" },
      { year: 1926, content: "Treaty of Berlin -German foreign minister Gustav Stresemann 1923-29 keen to have cooperative relations with Russia. 1925's Locarno pact by him allowed Germany to restore diplomatic position in Europe. The treaty of Berlin was seen as an adaption of Rapallo, restating frinedly cooperation between the two countries. It also stated that if either country was attacked by a third party, it would remain neutral in the conflict. It also stated that no economic boycott would be launched in either country and that the treaty would remain in force for 5 years. The USSR also received large financial credits from German banks. Good relations continued until the death of Stresemann in 1929, coinciding with the world economic crisis.", category: "Foreign Policy/International" },
      { year: "1924-1927", content: "Defeat of Left Opposition - Stalins's perceived control was growing and it was suprising that in 1924 Trotsky didn't move against him at the Thirteenth Party Congress in May. Over time, Trotsky lost support while Stalin built up a personal following of loyal supporters such assisstant general secretary Molotov, Kaganovich - the first secretary of the party in Ukraine and Kirov a youhtful rising star in the lenigrad party. ", category: "Political" },
      { year: "1926-1927", content: "Zinoviev, Kamenev and Trotsky removed from Politburo in October 1926 due to their opposition against Stalin. Then, in Oct 1927 the central committee voted to expel Trotsky Zinoviev and Kamenev. By November Trotsky and Zinoviev were expelled from the party altogether. ", category: "Political" },
      { year: 1927, content: "The Great Turn - Dramatic shift in economic policy and the abandonment of the NEP towards rapid industrialisation. Previous policies towards peasantry were scrapped to make way for brutal enforcement of the collectivisation of agriculture. In the 1920's it was hoped collectives and state farms (kolkhozes and sovkhozes) would achieve the needed food supply -predominantly grain - however growth of these farms was so slow - by 1928 less than 5% of peasants were working on collective farms. There was a huge crisis in grain procurement in winter 1927 to 1928 with grain purchase by the government 25% down. Low grain prices led to peasant producers concentrating on other goods worth higher prices. The great turn led to the launch of the first five year plan.", category: "Economic" },
      { year: 1927, content: "Instability in China- Stalins cheif in foreign affairs was Chicherin. Between 1925-27 there was a rise of the industrial working class in China, leading to militant action and strikes. The chinese communist party formed in 1921, expecting support from Stalin and the comnitern. However, Stalin preferred to back nationlaist movement of GMD (Guomindang) who he believed were more likely to bring stability. He tried to get the two parties to form an alliance, however in March 1926 GMD massacred striking workers in Canton and established a military dictatorship. In 1927 they viciously suppressed a communist led workers revolt with thousands of workers killed and also massacred striking workers in Wuhan with 30,000 killed. Stalin's main concerns was stability in Russia and he gave GMD financial backing and military help, forcing this through the poltiburo and accepting GMD as member of the comnitern. This was bitterly criticised by Trotsky, however his support was waning.  ", category: "Foreign Policy/International" },
      { year: 1928, content: "Shakhty Trial", category: "Social" },
      { year: "1924-on", content: "Molotov joined bolsheviks in 1906 and was part of the seizure of power in petrograd in 1917. He was second secretary from 1922 and a loyal ally of Stalin who replaced Rykov as party chair in 1930 and was minister of foreign affaris from 1939-49.", category: "Political" },
      { year: "1924-on", content: "Kaganovich - loyal support of Stalin who ran the party bureaucracy and joined the poltiburo in 1930. He was blamed as chief cause of great famine due to his forced collectivisation policies and he lost power after Stalins death.", category: "Political" },
      { year: "1924-on", content: "Kirov was active in the revolution of 1917 and a military commander in North Caucasus in Civil War. He was handpicked to replace Zinoviev as party boss in Lenigrad in 1926. He was very popular in party and assassinated by Stalin's secret orders due to this in 1934.", category: "Political" }, 
      { year: 1928, content: "First Five Year Plan - main aim was an ambitious increase in output. Develop heavy industry (coal, iron, steel and machinery), boost overall production by 300%, improve transport systems especially railways, 6x more electric power by 1933 compared to 1928 (electrification), light industry such as household goods given low priority but was still expected to double its output. Some worried harsh imposition of collectivisation against the kulaks would result in less food being produced. To combat grain procurement, especially in Siberia and the Urals, Stalin went and closed free markets, using the criminal law (article 107) to stop speculation and pressuring local officals to seize grain by force. In 1929 the central committee sent 25000 industrial workers into the countryside to accelerate the development of collective farms.", category: "Economic" },
      { year: 1929, content: "Defeat of Right Opposition - Stalin's long term aims did not consist of sharing power with the right and Bukharin. There was key differences in policy in areas such as NEP and towards peasants. Russia was having a serious food shortage and there was difficulty buying grain from peasants. This created further discontent for the NEP with many wanting to see Russia industrialise more quickly. Stalin wanted tough action to compel peasantry to increase grain supplies while Bukharin was soft on the peasants. Stalin personally supervised stern measures against peasants in Siberia in 1928, not discussing with Bukharin beforehand. Stalin and Bukharin clashed repeatedly in the poltiburo, however Bukharins speeches made little impact as other members supported Stalin. Stalin who had formerly been moderate was becoming a radical revolutionary, with war in the countryside against the Kulaks, rapid industrialisation and interventionist foreign policies and aggressive support for the comnitern. In feb 1929, Bukharin was desperate enough to consider making an alliance with Trotsky and in 1929 was deprived of several of his posts including as editor of the pravda. In 1929 he was expelled from the poltiburo. In december 1929, Stalin made a speech declaring the harsh nature of the policies he intended to follow and became the despot.", category: "Political" },
      { year: 1929, content: "Few of the old bolsheviks died peacefully in their beds. Of those who conteded for power in the 1920's Stalin was the only one to live beyong 1940. Most died through violence at Stalin's orders. Trotsky went into exile and criticised Stalins leadership from afar from 1929. Most attempted to reconcile themselves to Stalin's rule with confessions of errors. Zinoviev and Kamenev gave in to Stalin in 1928 but lost their high posts and place in the poltiburo. Tomsky was removed from his role with trade unions and Rykov replaced in 1930. Even Bukharin admitted his quote mistakes in Nov 1930 to try to preserve some limited influence in the party. However Stalin never trusted these, leading to a series of arrests and show trials in late 1930's. ", category: "Political" },
      { year: 1929, content: "Celebration of Stalin's 50th birthday", category: "Social" },
      { year: 1929, content: "Call for mass collectivisation and liquidation of kulaks (part of the five year plan as mentioned previously in the timeline).", category: "Economic" },
      { year: 1932-33, content: "The Great Famine in Ukraine and elsewhere", category: "Economic" },
      { year: 1933, content: "Second Five Year Plan", category: "Economic" },
      { year: 1934, content: "Assassination of Kirov", category: "Political" },
      { year: 1934, content: "Soviet entry into League of Nations", category: "Foreign Policy/International" },
      { year: 1935, content: "Beginning of Stahkhanovite movement", category: "Social" },
      { year: 1935, content: "Pacts signed between USSR, France and Czechoslovakia", category: "Foreign Policy/International" },
      { year: 1936, content: "Family Law to restrict abortion and divorce", category: "Social" },
      { year: 1936, content: "Show Trial of Zinoviev, Kamenev and others, Yezhiv appointed head of NKVD", category: "Political" },
      { year: 1936, content: "Stalin Constitution", category: "Political" },
      { year: 1936, content: "Soviet intervention in Spanish Civil War", category: "Foreign Policy/International" },
      { year: 1937, content: "Show Trial of Radek and others", category: "Political" },
      { year: 1937, content: "Execution of Marshal Tukhachevsky and Red Army Officers", category: "Political" },
      { year: 1937, content: "Height of Great Terror (to late 1938)", category: "Social" },
      { year: 1938, content: "Third five year plan", category: "Economic" },
      { year: 1938, content: "Show Trial of Bukharin, Rykov and others", category: "Political" },
      { year: 1938, content: "Labour Book for workers introduced", category: "Social" },
      { year: 1938, content: "Yezhov replaced by Beria", category: "Political" },
      { year: 1939, content: "Nazi-Soviet pact", category: "Foreign Policy/International" },
      { year: 1939, content: "Soviet invasion of Eastern Poland and Finland", category: "Foreign Policy/International" },
      { year: 1940, content: "Soviet annexation of Baltic States", category: "Foreign Policy/International" },
      { year: 1941, content: "Nazi invasion of USSR", category: "Foreign Policy/International" },
      { year: 1941, content: "Emergency legislation", category: "Political" },
      { year: 1941, content: "Beginning of siege of Leningrad", category: "Foreign Policy/International" },
      { year: 1941, content: "Battle for Moscow", category: "Foreign Policy/International" },
      { year: 1941, content: "US Lend-Lease agreed", category: "Economic" },
      { year: 1941, content: "December Soviet counter offensive", category: "Foreign Policy/International" },
      { year: 1942, content: "Battle of Stalingrad", category: "Foreign Policy/International" },
      { year: 1943, content: "German surrender at Stalingrad", category: "Foreign Policy/International" },
      { year: 1943, content: "Battle of Kursk", category: "Foreign Policy/International" },
      { year: 1943, content: "Deportations from North Caucasus", category: "Social" },
      { year: 1944, content: "Siege of Leningrad broken", category: "Foreign Policy/International" },
      { year: 1944, content: "Soviet armies advance into eastern Europe", category: "Foreign Policy/International" },
      { year: 1945, content: "Soviet Invasion of Germany", category: "Foreign Policy/International" },
      { year: 1945, content: "Yalta Conference", category: "Foreign Policy/International" },
      { year: 1945, content: "German and Japanese surrender", category: "Foreign Policy/International" },
      { year: 1945, content: "Potsdam Conference", category: "Foreign Policy/International" },
      { year: 1946, content: "Beginning of Zhdanovschina", category: "Social" },
      { year: 1947, content: "Post-war Famine", category: "Economic" },
      { year: 1947, content: "Cominform Established", category: "Foreign Policy/International" },
      { year: 1948, content: "Communist coup in Czechslovakia", category: "Foreign Policy/International" },
      { year: 1948, content: "Berlin Blockade", category: "Foreign Policy/International" },
      { year: 1949, content: "Leningrad Affair", category: "Political" },
      { year: 1949, content: "Soviet atomic bomb", category: "Foreign Policy/International" },
      { year: 1952, content: "Doctors plot and new politica purges", category: "Political" },
      { year: 1953, content: "Death of Stalin", category: "Political" }

    ],
    The_Tudors: [
      { year: 1928, content: "Penicillin discovered", category: "discovery" },
      { year: 1969, content: "Moon Landing", category: "discovery" },
      { year: 2012, content: "Higgs Boson found", category: "discovery" }
    ]
  };
  
  const quizData = {
    Russia: [
      { year: "1900-1917", question: "How did the Tsar rule Russia before 1917? What role did ministers, the nobility, and the army play? How large was the Russian army in 1914 and by the end of World War I?", answer: "Before 1917, the Tsar ruled autocratically through edicts (ukases) and ministers had no power to act independently. His authority was reinforced by the nobility and the imperial bureaucracy. The Russian army had 6 million soldiers in 1914, expanding to 12 million by the end of World War I.", category: "Political" },
      { year: "1900-1917", question: "What methods did the Tsarist regime use to control the population? What powers did the Okhrana have and how did they suppress dissent?", answer: "The regime enforced strict surveillance and heavy censorship across society. The Okhrana, the secret police, had sweeping powers to raid homes, arrest individuals, and imprison or exile anyone suspected of anti-Tsarist activity.", category: "Political" },
      { year: 1905, question: "What events in 1905 led to pressure on the Tsar's regime? What was the October Manifesto and what did it promise?", answer: "After Russia's defeat in the Russo-Japanese War, opposition grew, forcing the Tsar to issue the October Manifesto in 1905. It promised an elected State Duma, marking a limited concession to demands for reform.", category: "Political" },
      { year: 1906, question: "What were the Fundamental Laws of 1906? When were they issued and what did they declare about the Tsar’s authority?", answer: "Issued before the First Duma met in May 1906, the Fundamental Laws reasserted the Tsar’s absolute authority and limited the Duma’s power, effectively preserving autocracy.", category: "Political" },
      { year: "1900-1917", question: "What were the main opposition groups in Tsarist Russia? Who were the Liberals, Socialist Revolutionaries, and Social Democrats? When was the SD party founded and how did it split?", answer: "The Liberals (Kadets and Octobrists) sought moderate reform and a constitutional monarchy. The Socialist Revolutionaries, formed in 1901, aimed to help the peasantry and included some terrorist factions. The Social Democrats, founded in 1898, were inspired by Karl Marx. In 1903, Lenin led a split in the SDs, forming the Bolsheviks who favored a tightly organized revolutionary party.", category: "Political" },
      { year: "1900-1917", question: "Who was Karl Marx? What did his stage theory of history propose? When was the Communist Manifesto published and when was it translated into Russian?", answer: "Karl Marx was a German philosopher (1818–1883) whose Communist Manifesto was published in 1848 and translated into Russian in 1869. His stage theory described human society progressing through primitive communism, imperialism, feudalism, capitalism, socialism, and ultimately stateless communism.", category: "Social" },
      { year: "1900-1917", question: "What is the difference between socialism and communism in Marxist theory? What happens in each stage?", answer: "In socialism, the working class controls production and distribution based on need. In full communism, all property is communal, states and money disappear, and people work together purely for the common good.", category: "Social" },
      { year: "1870–1924", question: "Who was Lenin? When did he live, what was his role in early Russian Marxism, and how did he build the movement while in exile?", answer: "Lenin (1870–1924) was a Marxist revolutionary targeted by the secret police. While exiled in Siberia during the SD party's founding in 1898, he authored its programme, founded the revolutionary newspaper Iskra ('spark'), and developed an underground party network that became the Bolsheviks.", category: "Political" },
      { year: 1917, question: "Who was Leon Trotsky and what were his major roles in 1917? What position did he hold and how did his career end?", answer: "Leon Trotsky founded the St. Petersburg Soviet in 1905, chaired the Petrograd Soviet in 1917, and organized the Military Revolutionary Committee that planned the October Bolshevik takeover. He was expelled from the Communist Party by Stalin in 1929 and assassinated in Mexico in 1940 by a Stalinist agent.", category: "Social" },
      { year: 1917, question: "What caused the strikes in Petrograd in early 1917 and how did they escalate? What happened between 14th and 27th February, and what was the result of the unrest?", answer: "Unemployment and starvation led to mass strikes in Petrograd. On 14th February, 100,000 workers from 58 factories walked out. Rationing announcements led to violence. By 23–24th February, 90,000 workers were on strike and 240,000 people protested. On 27th February, 40 demonstrators were killed, but mutiny followed in the Volynskii regiment, with 66,000 soldiers joining protests. The Duma set up a 12-man Provisional Committee to take over the government.", category: "Social" },
      {year: 1917, question: "How did the Petrograd Soviet and Provisional Government form? Who led the Soviet and how many members did it have by March 10th? What is meant by dual authority?", answer: "The Petrograd Soviet formed with elected representatives from each regiment and grew to 3,000 members by 10th March, with Alexander Kerensky as a key figure. The Grand Duke Mikhail handed over authority to the Provisional Government, resulting in dual authority—both groups operating from different parts of the Tauride Palace.", category: "Political" },
      { year: 1917, question: "When did Tsar Nicholas II abdicate and what did this signify?", answer: "Tsar Nicholas II abdicated on 2nd March 1917, ending centuries of Romanov autocracy and leaving Russia under provisional leadership.", category: "Political" },
      { year: 1917, question: "When did Lenin return to Petrograd? What were the April Theses and what did Lenin call for? How influential was he at that point?", answer: "Lenin returned on 3rd April and issued the April Theses, demanding an end to support for the Provisional Government, immediate peace, and transfer of power to the Soviets. He also called for all land to be state-owned. At that time, the Bolsheviks had only 23,000 members and 40 Soviet representatives. By the end of April, Lenin had convinced the majority of the Bolshevik Central Committee.", category: "Political" },
      { year: 1917, question: "What was the level of support for the Bolsheviks in mid-1917 compared to the Provisional Government?", answer: "At the All-Russian Congress of Soviets on 3rd June, the Provisional Government received overwhelming support—543 votes to 126 against the Bolsheviks.", category: "Political" },
      { year: 1917, question: "When did Trotsky officially join the Bolsheviks?", answer: "Trotsky joined the Bolsheviks on 2nd July 1917.", category: "Political" },
      { year: 1917, question: "What happened during the July Days? Who was involved, what actions were taken, and what were the consequences for Bolshevik leaders?", answer: "The July Days involved armed demonstrations by sailors from the Kronstadt base, using Bolshevik slogans. Lenin refused to support or condemn the protests. Violence broke out, and the Provisional Government crushed the demonstration. Lenin and Stalin fled, Trotsky and Kamenev were imprisoned, and the Bolshevik newspaper denounced its leaders. Kerensky became Prime Minister on 8th July, and the Bolsheviks' popularity temporarily declined.", category: "Political" },
      { year: 1917, question: "What was the Kornilov Affair and how did it affect the Bolsheviks? What did Kornilov attempt and what was the outcome?", answer: "In August 1917, General Kornilov attempted a coup by sending six regiments to Petrograd. Kerensky panicked and released imprisoned Bolsheviks to help defend the city. The coup failed and Kornilov’s supporters were arrested. As a result, Bolshevik membership surged from 23,000 in February to 200,000 by October, with 100,000 Red Guards. Trotsky became chairman of the Petrograd Soviet executive committee on 26th September.", category: "Political" },
      { year: 1917, question: "What happened during the Bolshevik seizure of power on 25th October? How many supported them, what actions did they take, and what followed?", answer: "On 24–25th October, Bolshevik forces seized key buildings in Petrograd. 15 out of 18 garrisons pledged loyalty to the Soviets. The Bolsheviks had support from 200,000 Red Guards, 60,000 Baltic sailors, and 150,000 Petrograd soldiers. Fewer than 5 deaths occurred due to limited resistance. The Provisional Government was arrested and Lenin’s decrees on peace and land were adopted. The Soviet government, Sovnarkom, was formed with Lenin as chairman.", category: "Political" },
      { year: 1917, question: "What were Lenin’s key decrees after the October Revolution? What policies were introduced for land, war, workers, and society?", answer: "Lenin introduced the Decrees on Peace and Land, calling for an end to war with no indemnities or annexations. Armistice came in November and demobilization followed in December. Land was seized without compensation, and private ownership abolished. Workers gained an 8-hour day, and the press was censored. Social insurance, equality laws, and secular control of marriage and divorce were established.", category: "Political" },
      { year: 1917, question: "What was the Sovnarkom and how was it formed? Who dominated it and what were its early activities?", answer: "Sovnarkom, or the Council of People's Commissars, was formed after a vote where 500 of 670 delegates supported a socialist government. Bolsheviks dominated, with Trotsky as Commissar for Foreign Affairs. It met one to two times per day and began peace talks with Germany.", category: "Political" },
      { year: 1917, question: "What was the Cheka and when was it formed?", answer: "The Cheka, the Bolshevik secret police, was established in 1917 to suppress counter-revolution and dissent.", category: "Political" },
      { year: 1918, question: "What were the terms and consequences of the Treaty of Brest-Litovsk signed on 3rd March 1918?", answer: "The Treaty of Brest-Litovsk resulted in Russia losing Finland, Estonia, Latvia, Lithuania, Poland, Bessarabia, Georgia, Belarus, and Ukraine—amounting to one-sixth of its population and one-third of agricultural produce. Russia also agreed to pay 3 billion roubles in war reparations to Germany.", category: "Political" },
      { year: 1918, question: "Why was the Constituent Assembly dissolved, and what was the public reaction?", answer: "Despite winning only 24% of the vote compared to the Socialist Revolutionaries' 53%, the Bolsheviks under Lenin dissolved the Constituent Assembly, arguing elections proved nothing. Demonstrations followed, and 12 civilians were killed during protests.", category: "Political" },
      { year: 1918, question: "Why did the Russian Civil War begin and who opposed the Bolsheviks?", answer: "The Civil War began because many opposed Bolshevik rule: the right rejected their legitimacy, the center criticized their refusal to hold elections, and some on the left believed they betrayed the Soviets. Monarchists also supported a return to tsarist rule.", category: "Political" },    
      { year: 1918, question: "What were the features and limitations of the First Soviet Constitution of July 1918? What happened to the Tsar?", answer: "The July 1918 constitution gave power to the All-Russian Congress of Soviets and the Central Executive Committee, which elected the Sovnarkom. Voting was limited to the 'toiling classes,' with workers' votes weighted 5:1 over peasants. In practice, power was concentrated in the Bolshevik Central Committee. The Tsar and his family were executed in the Urals that same month.", category: "Political" },
      { year: 1918, question: "How did the Russian Civil War unfold between 1918 and 1922, and what led to Bolshevik victory?", answer: "Kolchak declared himself Supreme Ruler in 1918. In 1919, Denikin reached 200 miles from Moscow, and Yudenich approached Petrograd. By 1920, Kolchak was shot and Denikin’s forces evacuated. The war ended in 1922 with the formation of the USSR. Trotsky led the Red Army using ex-Tsarist officers and Cheka repression. Bolsheviks controlled communication hubs, while the White forces were disunited, poorly led, and lacked peasant support.", category: "Political" },
      { year: "1920-1924", question: "What was the structure of Soviet government and Communist Party during 1920–1924?", answer: "The Soviet government consisted of Sovnarkom (15–20 members), the Central Committee, the Congress of Soviets, and local soviets. The Communist Party mirrored this with the Politburo (7–9 members), its Central Committee, the Party Congress, and local party organizations.", category: "Political" },  
      { year: 1919, question: "What was the Comintern and what were its aims and origins?", answer: "The Comintern, or Third Communist International, was founded in 1919 in Moscow to promote global Marxist revolution. It included 50 delegates from Europe, the US, Australia, and Japan. Lenin dominated the proceedings, and many believed Germany was ripe for revolution despite the failure of the Spartacist uprising.", category: "Foreign Policy/International" },
      { year: 1920, question: "What was the Russo-Polish War and how did it relate to Russia's international position? What followed in 1922?", answer: "The Russo-Polish War occurred during the civil war, and by 1919 Russia was excluded from the League of Nations. However, Chicherin negotiated the Treaty of Rapallo in April 1922, restoring relations with Germany and re-establishing Russia in foreign affairs.", category: "Foreign Policy/International" },
      { year: 1921, question: "What caused the Kronstadt Rebellion in 1921 and how did the Bolsheviks respond?", answer: "A food crisis in 1921 led to worker unrest and protests over lack of representation in trade unions. 30,000 sailors at Kronstadt, previously loyal Bolsheviks, revolted. The Red Army crushed the revolt, executing leaders and imprisoning 15,000.", category: "Social" },
      { year: 1921, question: "What was the Red Terror and how was it implemented?", answer: "The Red Terror was a campaign of political repression led by the Cheka between 1918 and 1920, targeting Socialist Revolutionaries, Mensheviks, and other enemies. An estimated 500,000 people were executed.", category: "Political" },
      { year: 1921, question: "What were the main features and effects of the New Economic Policy (NEP) launched in 1921?", answer: "The NEP ended grain requisitioning and allowed private trade; a 1923 tax replaced requisitioning. Large-scale industries like steel and coal remained state-controlled, while small enterprises returned to private hands. Rationing ended, and industries paid workers from profits. By 1926, production levels matched those of 1913, and by 1925, 25,000 private traders in Moscow controlled 75% of trade, though resented by Bolsheviks.", category: "Economic" },
      { year: 1921, question: "What was the purpose of the 1921 Ban on Factions within the Communist Party?", answer: "The Ban on Factions was introduced to eliminate internal dissent and reinforce party unity, effectively cementing a leadership model that demanded loyalty and adherence to the official party line, thereby consolidating Lenin's control.", category: "Political" },
      { year: "1921-22", question: "What caused the widespread famine in Russia in 1921–1922 and how did the government respond?", answer: "The famine was caused by drought, civil war disruption, and War Communism’s grain requisitioning. Up to five million people died, especially in the Volga and Ural regions, where cannibalism and child-selling occurred. The Bolsheviks initially denied the crisis but later accepted aid, mainly from the American Relief Administration, which fed millions.", category: "Economic" },
      { year: 1922, question: "What was the significance of Stalin’s election as General Secretary of the Communist Party in 1922?", answer: "Stalin's appointment as General Secretary allowed him to control party appointments and build a power base. This coincided with Lenin's declining health, and Stalin formed a triumvirate with Kamenev and Zinoviev to block Trotsky’s ambitions.", category: "Political" },
      { year: 1922, question: "What was the Treaty of Rapallo and why was it important?", answer: "The Treaty of Rapallo between Germany and Russia re-established diplomatic relations, waived WWI reparations, and pledged mutual goodwill in commercial and economic matters, helping Russia break out of international isolation.", category: "Foreign Policy/International" },
      { year: 1922, question: "What was Lenin’s Testament, and what did it reveal about the Soviet leadership?", answer: "Lenin’s Testament, dictated between Dec 1922 and Jan 1923, warned against Stalin’s excessive power and rudeness, citing his brutal suppression of Georgia. Lenin also criticized Trotsky, Zinoviev, and Kamenev but called Trotsky the most capable. The Testament was suppressed by Stalin and his allies after Lenin’s death in 1924.", category: "Political" },
      { year: 1924, question: "What was the Zinoviev Letter and how was it used politically?", answer: "The Zinoviev Letter was a forged document used by British political opponents to discredit the Labour Party by suggesting collusion with Soviet communists, influencing public opinion and damaging Labour's image.", category: "Foreign Policy/International" },
      { year: 1924, question: "What impact did Lenin’s death have on the power struggle within the Communist Party?", answer: "Lenin’s death in 1924 triggered a fierce power struggle. Trotsky lost ground due to late Bolshevik conversion and strategic missteps. Zinoviev and Kamenev initially allied with Stalin, then switched to Trotsky too late. Right-wing contenders like Bukharin and Rykov underestimated Stalin. Tomsky, another contender, allied with Stalin out of hostility to Trotsky.", category: "Political" },
      { year: 1924, question: "What were the main political disagreements that emerged after Lenin’s death?", answer: "Major disputes included the NEP—Trotsky and the left wanted to abandon it, while the right supported its continuation. Stalin shifted positions over time. Another issue was permanent revolution vs. socialism in one country: Trotsky supported global revolution, while Stalin promoted self-contained socialism, especially after foreign revolutions failed.", category: "Political" },
      { year: 1925, question: "What were the key developments in the power struggle in 1925 and how did the party factions shift?", answer: "Trotsky was forced out as Commissar for War in January. Though Zinoviev called for his expulsion, Stalin resisted. By September, Kamenev and Zinoviev opposed Stalin for example at the 14th party congress in december 1925. and joined Trotsky. Stalin allied with Bukharin, forming the 'duumvirate' that effectively ruled the USSR from 1926–27.", category: "Political" },
      { year: 1926, question: "What was the United Opposition and how did the power struggle evolve in 1926?", answer: "The United Opposition, formed by Trotsky, Zinoviev, and Kamenev, challenged Stalin’s leadership. The period saw a 'literary discussion' of pamphlets and books. Stalin’s ideas gained popular support. In Dec 1926, Stalin offered to resign out of frustration. In 1927, he was blamed by the left for failing to support Chinese communists in Canton and Shanghai.", category: "Political" },
      { year: 1926, question: "What were the key aspects of the Treaty of Berlin signed in 1926, and how did it impact Russia's relations with Germany? What was the duration of the treaty, and what were the main clauses?", answer: "The Treaty of Berlin, signed in 1926, reaffirmed friendly relations and cooperation between Germany and the USSR. It included provisions for mutual neutrality if either country was attacked by a third party, no economic boycotts, and financial credits from German banks to Russia. The treaty was set to last for five years. The agreement was seen as a continuation of the 1922 Treaty of Rapallo, emphasizing the strengthening of diplomatic and economic ties between the two countries.", category: "Foreign Policy/International" },
      { year: "1924-1927", question: "Between 1924 and 1927, how did Trotsky lose support and Stalin build a loyal following in the Communist Party? Can you name key figures who supported Stalin during this period?", answer: "During 1924-27, Trotsky’s political influence waned, and Stalin increasingly built a personal following. Notably, Stalin secured the loyalty of key figures like Molotov, Kaganovich, and Kirov. These figures supported Stalin's rise while Trotsky failed to challenge Stalin at the Thirteenth Party Congress in 1924, which further weakened his position within the party.", category: "Political" },
      { year: "1926-1927", question: "What actions did Stalin take in 1926 and 1927 against his political opponents within the Politburo? How did these actions lead to the expulsion of Trotsky, Zinoviev, and Kamenev?", answer: "In 1926 and 1927, Stalin took decisive action to remove his political rivals from the Politburo. In October 1926, he removed Zinoviev, Kamenev, and Trotsky from the Politburo, and by October 1927, the Central Committee voted to expel them. By November 1927, Trotsky and Zinoviev were completely expelled from the Communist Party, solidifying Stalin's power.", category: "Political" },
      { year: 1927, question: "What was The Great Turn in 1927, and how did it affect Soviet economic policies? What were the key changes in agricultural and industrial policies, and what was the state of collective farms in 1928?", answer: "The Great Turn in 1927 marked a shift from the NEP to rapid industrialization and forced collectivization. The state aimed to control agriculture through collective farms (kolkhozes) and state farms (sovkhozes). However, by 1928, less than 5% of peasants were working on collective farms. The policy led to a grain procurement crisis, which prompted Stalin to initiate the First Five-Year Plan for industrialization and collectivization.", category: "Economic" },
      { year: 1927, question: "How did Stalin handle the political instability in China between 1925 and 1927, and what were the outcomes of his support for the Guomindang (GMD)?", answer: "Stalin supported the Guomindang (GMD) in China over the Communist Party, formed in 1921, preferring their stability. Between 1925 and 1927, the GMD massacred thousands of striking workers in 1926 in Canton - 30000 at Wuhan in 1927 and suppressed communist uprisings. Despite these actions, Stalin continued to back the GMD, believing their leadership would provide the necessary stability for China, giving military and financial support. Stalin's foreign policy in China was controversial, particularly criticized by Trotsky.", category: "Foreign Policy/International" },
      { year: 1928, question: "What was the Shakhty Trial of 1928, and why was it significant in the context of Stalin’s rule? What did the trial highlight about Stalin's approach to opposition?", answer: "The Shakhty Trial of 1928 involved accusations of sabotage against engineers and managers in the Shakhty coal mine. The trial was a public spectacle designed to show Stalin’s power and reinforce his image of combating counterrevolutionary forces. It marked the beginning of widespread purges in Soviet society and served to intimidate those in industry and government who might oppose Stalin’s policies.", category: "Social" },
      { year: "1924-onwards", question: "What roles did Molotov play in Soviet government from 1924 onwards, and how did his relationship with Stalin affect his political career?", answer: "Molotov joined the Bolsheviks in 1906 and was a key figure in the October Revolution of 1917. He became Second Secretary in 1922 and remained a loyal ally of Stalin. Molotov replaced Rykov as party chair in 1930 and served as Minister of Foreign Affairs from 1939 to 1949. His close relationship with Stalin helped him maintain a prominent role throughout the 1920s and 1930s.", category: "Political" },
      { year: "1924-onwards", question: "How did Kaganovich rise to power under Stalin, and what role did he play in the forced collectivization policies?", answer: "Kaganovich was a loyal supporter of Stalin, becoming a key figure in the party bureaucracy. He joined the Politburo in 1930 and played a crucial role in implementing Stalin’s collectivization policies. Kaganovich was blamed for the Great Famine, which resulted from the forced collectivization, but remained in power until Stalin’s death in 1953.", category: "Political" },
      { year: "1924-onwards", question: "What role did Kirov play in the Soviet Union after 1924, and how did his popularity pose a threat to Stalin’s leadership?", answer: "Kirov was a significant figure in the revolution of 1917 and the Civil War, later becoming a military commander. He replaced Zinoviev as the party boss in Leningrad in 1926 and gained considerable popularity within the Communist Party. His growing popularity posed a potential threat to Stalin’s leadership, and in 1934, Kirov was assassinated, likely under Stalin’s orders.", category: "Political" },
      { year: 1928, question: "What were the goals of the First Five-Year Plan in 1928, and how did it impact Soviet industry and agriculture? What was the expected increase in production by 1933?", answer: "The First Five-Year Plan, launched in 1928, aimed for a 300% increase in industrial output, focusing on heavy industries such as coal, iron, and steel, boosting production by 300%. It also aimed to electrify the country, increasing electric power by 600% by 1933 (compared to 1928). While the plan prioritized industrial development, it also pushed for rapid collectivization, despite resistance from peasants. This aggressive push for collectivization led to significant social and economic unrest.", category: "Economic" },
      { year: 1929, question: "What happened to Bukharin in 1929, and how did Stalin defeat the Right Opposition? What were the key policy disagreements between Bukharin and Stalin?", answer: "In 1929, Bukharin, the leader of the Right Opposition, was defeated by Stalin, primarily due to disagreements over the NEP and Stalin’s policies toward the peasantry. Bukharin’s more moderate stance on agriculture and his reluctance to enforce collectivization led to his marginalization. He was expelled from the Politburo in 1929 and lost his influence in the party, despite his earlier support for Stalin.", category: "Political" },
      { year: 1929, question: "What was the fate of many of the old Bolsheviks who contested power during the 1920s? Can you name key figures who were purged or removed from positions?", answer: "The old Bolsheviks who contested for power in the 1920s largely met violent ends, often through Stalin’s purges - only Stalin surviving beyond 1940. Trotsky was exiled in 1929, and figures like Zinoviev, Kamenev, Tomsky, and Bukharin were removed from their positions. Some, like Bukharin, admitted their mistakes in an attempt to regain influence, but Stalin never trusted them. Many were later arrested, executed, or disappeared during the Great Purge of the 1930s.", category: "Political" }
    ],

    The_Tudors: [
      { year: 1928, question: "What was discovered in 1928?", answer: "Penicillin", category: "discovery" },
      { year: 1969, question: "What happened in 1969?", answer: "Moon Landing", category: "discovery" },
      { year: 2012, question: "What was found in 2012?", answer: "Higgs Boson", category: "discovery" }
    ]
  };
  function populateCategoryFilter() {
    const data = learnData[topic];
    const categories = new Set(data.map(item => item.category));
    const categoryFilter = document.getElementById("categoryFilter");
    const previousValue = categoryFilter.value || "all"; // Save current selection
  
    categoryFilter.innerHTML = ""; // Clear existing options
  
    // Always include "All" option first
    const allOption = document.createElement("option");
    allOption.value = "all";
    allOption.textContent = "🌐 All";
    categoryFilter.appendChild(allOption);
  
    // Add options for each unique category
    categories.forEach(category => {
      const option = document.createElement("option");
      option.value = category;
      option.textContent =
        category === "war" ? "⚔️ War" :
        category === "discovery" ? "🔬 Discovery" :
        category === "Political" ? "📋🖋 Political" :
        category === "Economic" ? "💰 Economic" :
        category === "Foreign_Policy_International" ? "🌍Foreign/International" :
        category === "Social" ? "👪Social" :
        
        category; // fallback text
      categoryFilter.appendChild(option);
    });
    categoryFilter.value = previousValue;
  }
  
  const svg = document.getElementById("timelineSvg");
  const topic = new URLSearchParams(window.location.search).get("topic") || "history";
  document.getElementById("timelineTitle").textContent = `${topic.replace(/_/g, " ")} Timeline`;

  let currentMode = "learn";
  let currentCategory = "all";
  
  function renderTimeline() {
    populateCategoryFilter();
    document.getElementById("categoryFilter").value = currentCategory;
    const data = currentMode === "learn" ? learnData[topic] : quizData[topic];
    const filtered = data.filter(d => currentCategory === "all" || d.category === currentCategory);
    svg.innerHTML = "";
  
    // Neon glow filter
    const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    defs.innerHTML = `
      <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    `;
    svg.appendChild(defs);
  
    const screenWidth = window.innerWidth;
    const nodeWidth = 120;
    const nodeHeight = 120;
    const margin = 0.05;  // Slightly smaller margin for better fitting on smaller screens
    const availableWidth = screenWidth * (1 - 2 * margin);
    
    // Adjust number of columns based on screen width
    let colsPerRow = 1;
    if (screenWidth >= 1200) {
      colsPerRow = 5;
    } else if (screenWidth >= 992) {
      colsPerRow = 4;
    } else if (screenWidth >= 768) {
      colsPerRow = 3;
    } else if (screenWidth >= 370) {
      colsPerRow = 2;
    }
  
    const nodeSpacing = availableWidth / colsPerRow;
    const rowSpacing = nodeHeight + 10; // Vertical spacing between rows
    
    const nodes = [];
    let isReverse = false;
    let rowCount = 0;
    const startY = 120;
  
    for (let i = 0; i < filtered.length; i++) {
      const item = filtered[i];
      const col = i % colsPerRow;
  
      let x = col * nodeSpacing + availableWidth * margin;
      if (isReverse) {
        x = availableWidth - x - nodeWidth;
      }
      const y = startY + rowCount * 2 * rowSpacing;
  
      const cx = x + nodeWidth / 2;
      const cy = y + nodeHeight / 2;
      nodes.push({ cx, cy });
  
      // Circle
    // Circle
    const categoryColor = categoryColors[item.category] || categoryColors.default; // Get the color for the category or fallback to default

    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", cx);
    circle.setAttribute("cy", cy);
    circle.setAttribute("r", nodeWidth / 2);
    circle.setAttribute("fill", categoryColor); // Use the dynamic color based on category
    circle.setAttribute("stroke", "#00f6ff");
    circle.setAttribute("stroke-width", "4");
    circle.setAttribute("filter", "url(#neon-glow)");
    svg.appendChild(circle);

  
      // Text
      const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
      text.setAttribute("x", cx);
      text.setAttribute("y", y + 70);
      text.setAttribute("text-anchor", "middle");
      text.setAttribute("fill", "white");
      text.setAttribute("font-size", "25px");
      text.setAttribute("font-family", "Arial");
      text.style.pointerEvents = "none"; // Allow clicking through the text
      text.textContent = item.year;
      svg.appendChild(text);
      circle.addEventListener("click", () => {
        if (currentMode === "learn") {
          showPopup(item.content);
        } else {
          currentPopupItem = item;
          isShowingQuestion = true;
          showPopup(item.question); // Start with question
        }
      });
      
      
  
      if ((i + 1) % colsPerRow === 0 || i === filtered.length - 1) {
        isReverse = !isReverse;
        rowCount++;
      }
    }
  
    // Draw paths (after nodes and text)
    const paths = [];
    for (let i = 0; i < nodes.length - 1; i++) {
      const current = nodes[i];
      const next = nodes[i + 1];
  
      const isNewRow = (i + 1) % colsPerRow === 0;
      
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      const d = isNewRow
        ? `M ${current.cx} ${current.cy} L ${current.cx} ${next.cy}`
        : `M ${current.cx} ${current.cy} L ${next.cx} ${next.cy}`;
      path.setAttribute("d", d);
      path.setAttribute("fill", "none");
      
      // Make the paths thinner on smaller screens
      const pathStrokeWidth = (screenWidth < 768) ? 4 : 6; 
      path.setAttribute("stroke", "#0ff");
      path.setAttribute("stroke-width", pathStrokeWidth);
      path.setAttribute("stroke-linecap", "round");
  
      svg.appendChild(path);
      paths.push(path); // store to reorder after
    }
  
    // Reorder: move each path to the bottom
    for (let path of paths.reverse()) {
      svg.insertBefore(path, svg.firstChild.nextSibling); // below filter <defs>, above nothing else
    }
  }
  
  
  
  function switchMode() {
    currentMode = document.getElementById("modeSelect").value;
    renderTimeline();
  }
  
  function filterCategory() {
    currentCategory = document.getElementById("categoryFilter").value;
    renderTimeline();
  }
  
  function goHome() {
    window.location.href = "index.html";
  }
  
  document.addEventListener("keydown", function (e) {
    const container = document.querySelector(".timeline-container");
    const speed = 50;
    if (e.key === "ArrowDown") {
      container.scrollBy({ top: speed, behavior: "smooth" });
    } else if (e.key === "ArrowUp") {
      container.scrollBy({ top: -speed, behavior: "smooth" });
    }
  });
  
  window.onload = renderTimeline;
  
  popup.addEventListener("click", () => {
    if (currentMode === "quiz" && currentPopupItem) {
      if (isShowingQuestion) {
        showPopup(`Answer: ${currentPopupItem.answer}`);
      } else {
        showPopup(currentPopupItem.question);
      }
      isShowingQuestion = !isShowingQuestion;
    }
  });
  
