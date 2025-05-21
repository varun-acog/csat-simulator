const papers = {
    csat2022A: {
        title: "UPSC Prelims CSAT 2022 Simulator (Paper II - Set A)",
        questions: [
            {
                passage: "Passage-1<br>The main threat to maintaining progress in human development comes from the increasingly evident unsustainability of production and consumption patterns. Current production models rely heavily on fossil fuels. We now know that this is unsustainable because the resources are finite. The close link between economic growth and greenhouse gas emissions needs to be severed for human development to become truly sustainable. Some developed countries have begun to alleviate the worst effects by expanding recycling and investing in public transport and infrastructure. But most developing countries are hampered by the high costs and low availability of clean energy sources. Developed countries need to support developing countries' transition to sustainable human development.",
                question: "Unsustainability in production pattern is due to which of the following?<br>1. Heavy dependence on fossil fuels<br>2. Limited availability of resources<br>3. Expansion of recycling<br>Select the correct answer using the code given below.",
                options: ["(a) 1 and 2 only", "(b) 2 only", "(c) 1 and 3 only", "(d) 1, 2 and 3"],
                answer: "(a)" // Updated to 1-A
            },
            {
                passage: "Passage-1<br>The main threat to maintaining progress in human development comes from the increasingly evident unsustainability of production and consumption patterns. Current production models rely heavily on fossil fuels. We now know that this is unsustainable because the resources are finite. The close link between economic growth and greenhouse gas emissions needs to be severed for human development to become truly sustainable. Some developed countries have begun to alleviate the worst effects by expanding recycling and investing in public transport and infrastructure. But most developing countries are hampered by the high costs and low availability of clean energy sources. Developed countries need to support developing countries' transition to sustainable human development.",
                question: "Consider the following statements:<br>Developed countries can support developing countries' transition to sustainable human development by<br>1. making clean energy sources available at low cost<br>2. providing loans for improving their public transport at nominal interest rates<br>3. encouraging them to change their production and consumption patterns<br>Which of the statements given above is/are correct?",
                options: ["(a) 1 only", "(b) 1 and 2 only", "(c) 2 and 3 only", "(d) 1, 2 and 3"],
                answer: "(b)" // Updated to 2-B
            },
            {
                passage: "Passage-2<br>Unless the forces and tendencies which are responsible for destroying the country's environment are checked in the near future and afforestation of denuded areas is taken up on a massive scale, the harshness of the climatic conditions and soil erosion by wind and water will increase to such an extent that agriculture, which is the mainstay of our people, will gradually become impossible. The desert countries of the world and our own desert areas in Rajasthan are a grim reminder of the consequences of large-scale deforestation. Pockets of desert-like landscape are now appearing in other parts of the country including the Sutlej-Ganga Plains and Deccan Plateau. Where only a few decades back there used to be lush green forests with diverse wildlife, it is only bare earth now, without any vegetation.",
                question: "What is the most logical and crucial inference that can be drawn from the passage?",
                options: ["(a) Deforestation leads to droughts and floods", "(b) Agriculture is the backbone of the Indian economy", "(c) Afforestation efforts are urgently needed to prevent desertification and sustain agriculture", "(d) The Sutlej-Ganga Plains are turning into deserts due to climatic changes"],
                answer: "(c)" // Updated to 3-C
            },
            {
                passage: "",
                question: "Which date of June 2099 among the following is Sunday?",
                options: ["(a) 4", "(b) 5", "(c) 6", "(d) 7"],
                answer: "(d)" // Updated to 4-D
            },
            {
                passage: "",
                question: "A bill for ₹ 1,840 is paid in the denominations of ₹ 50, ₹ 20 and ₹ 10 notes. 50 notes in all are used. Consider the following statements:<br>1. 25 notes of ₹ 50 are used and the remaining are in the denominations of ₹ 20 and ₹ 10.<br>2. 35 notes of ₹ 20 are used and the remaining are in the denominations of ₹ 50 and ₹ 10.<br>3. 20 notes of ₹ 10 are used and the remaining are in the denominations of ₹ 50 and ₹ 20.<br>Which of the above statements are not correct?",
                options: ["(a) 1 and 2 only", "(b) 2 and 3 only", "(c) 1 and 3 only", "(d) 1, 2 and 3"],
                answer: "(a)" // Updated to 5-A
            },
            {
                passage: "",
                question: "Which number amongst 2^40, 3^21, 4^18 and 8^12 is the smallest?",
                options: ["(a) 2^40", "(b) 3^21", "(c) 4^18", "(d) 8^12"],
                answer: "(a)" // Updated to 6-A
            },
            {
                passage: "",
                question: "The digits 1 to 9 are arranged in three rows in such a way that each row contains three digits, and the number formed in the second row is twice the number formed in the first row; and the number formed in the third row is thrice the number formed in the first row. Repetition of digits is not allowed. If only three of the four digits 2, 3, 7 and 9 are allowed to use in the first row, how many such combinations are possible to be arranged in the three rows?",
                options: ["(a) 4", "(b) 3", "(c) 2", "(d) 1"],
                answer: "(d)" // Updated to 7-D
            },
            {
                passage: "Passage-1<br>As in simple matters like shoe-making, we think only a specially trained person will serve our purpose, but in politics, we presume that everyone who knows how to get votes knows how to administer a State. When we are ill, we call for a trained physician, whose degree is a guarantee of specific preparation and technical competence—we do not ask for the handsomest physician, or the most eloquent one: well then, when the whole State is ill should we not look for the service and guidance of the wisest and the best?",
                question: "Which one of the following statements best reflects the message of the author of the passage?",
                options: ["(a) We assume that in a democracy, any politician is qualified to administer a State.", "(b) Politicians should be selected from those trained in administration.", "(c) We need to devise a method of barring incompetence from public office.", "(d) As voters select their administrators, the eligibility of politicians to administer a State cannot be questioned."],
                answer: "(d)" // Updated to 8-D
            },
            {
                passage: "Passage-2<br>The poverty line is quite unsatisfactory when it comes to grasping the extent of poverty in India. It is not only because of its extremely narrow definition of 'who is poor' and the debatable methodology used to count the poor, but also because of a more fundamental assumption underlying it. It exclusively relies on the notion of poverty as insufficient income or insufficient purchasing power. One can better categorize it by calling it income poverty. If poverty is ultimately about deprivations affecting human well-being, then income poverty is only one aspect of it. Poverty of a life, in our view, lies not merely in the impoverished state in which the person actually lives, but also in the lack of real opportunity given by social constraints as well as personal circumstances—to choose other types of living. Even the relevance of low incomes, meagre possessions, and other aspects of what are standardly seen as economic poverty relate ultimately to their role in curtailing capabilities, i.e., their role in severely restricting the choices people have to lead variable and valued lives.",
                question: "Why is the methodology adopted in India to count the 'poor' debatable?",
                options: ["(a) There is some confusion regarding what should constitute the 'poverty line'.", "(b) There are wide diversities in the condition of the rural and urban poor.", "(c) There is no uniform global standard for measuring income poverty.", "(d) It is based on the proposition of poverty as meagre income or buying capacity."],
                answer: "(b)" // Updated to 9-B
            },
            {
                passage: "Passage-2<br>The poverty line is quite unsatisfactory when it comes to grasping the extent of poverty in India. It is not only because of its extremely narrow definition of 'who is poor' and the debatable methodology used to count the poor, but also because of a more fundamental assumption underlying it. It exclusively relies on the notion of poverty as insufficient income or insufficient purchasing power. One can better categorize it by calling it income poverty. If poverty is ultimately about deprivations affecting human well-being, then income poverty is only one aspect of it. Poverty of a life, in our view, lies not merely in the impoverished state in which the person actually lives, but also in the lack of real opportunity given by social constraints as well as personal circumstances—to choose other types of living. Even the relevance of low incomes, meagre possessions, and other aspects of what are standardly seen as economic poverty relate ultimately to their role in curtailing capabilities, i.e., their role in severely restricting the choices people have to lead variable and valued lives.",
                question: "Which one of the following statements best reflects the crux of the passage?",
                options: ["(a) Poverty should be measured in terms of insufficient income.", "(b) Poverty in India is more about lack of opportunities than insufficient income.", "(c) Poverty in India can be eradicated by increasing purchasing power.", "(d) The poverty line in India is an accurate measure of deprivation."],
                answer: "(c)" // Updated to 10-C
            },
            {
                passage: "",
                question: "In a tournament of Chess having 150 entrants, a player is eliminated whenever he loses a match. It is given that no match results in a tie/draw. How many matches are played in the entire tournament?",
                options: ["(a) 151", "(b) 150", "(c) 149", "(d) 148"],
                answer: "(c)" // Updated to 11-C
            },
            {
                passage: "",
                question: "How many 3-digit natural numbers (without repetition of digits) are there such that each digit is odd and the number is divisible by 5?",
                options: ["(a) 8", "(b) 12", "(c) 16", "(d) 24"],
                answer: "(d)" // Updated to 12-D
            },
            {
                passage: "",
                question: "Consider the Question and two Statements given below:<br>Question: Is x an integer?<br>Statement-1: x/3 is not an integer.<br>Statement-2: 3x is an integer.<br>Which one of the following is correct in respect of the Question and the Statements?",
                options: ["(a) Statement-1 alone is sufficient to answer the Question", "(b) Statement-2 alone is sufficient to answer the Question", "(c) Both Statement-1 and Statement-2 are sufficient to answer the Question", "(d) Both Statement-1 and Statement-2 are not sufficient to answer the Question"],
                answer: "(a)" // Updated to 13-A
            },
            {
                passage: "",
                question: "The increase in the price of a certain item was 25%. Then the price was decreased by 20% and then again increased by 10%. What is the resultant increase in the price?",
                options: ["(a) 5%", "(b) 10%", "(c) 12.5%", "(d) 15%"],
                answer: "(a)" // Updated to 14-A
            },
            {
                passage: "Passage<br>In some places in the world, the productivity of staples such as rice and wheat has reached a plateau. Neither new strains nor fancy agrochemicals are raising the yields. Nor is there much unfarmed land left that is suitable to be brought under the plough. If global temperature continues to rise, some places will become unsuitable for farming. Application of technology can help overcome these problems. Agricultural technology is changing fast. Much of this change is brought about by affluent farmers in the West/Americas. Techniques developed in the West are being adapted in some places to make tropical crops more productive. Technology is of little use if it is not adapted. In the developing world, that applies as much to existing farming techniques as it does to the latest advances in genetic modification. Extending to the smallholders and subsistence farmers of Africa and Asia the best of today's agricultural practices, in such simple matters as how much fertilizers to apply and when, would lead to a greatly increased availability of food for humanity. So would things like better roads and storage facilities, to allow for the carriage of surpluses to markets and reduce wastage.",
                question: "Based on the above passage, the following assumptions have been made:<br>1. Development of agricultural technology is confined to developed countries.<br>2. Agricultural technology is not adapted in developing countries.<br>Which of the above assumptions is/are valid?",
                options: ["(a) 1 only", "(b) 2 only", "(c) Both 1 and 2", "(d) Neither 1 nor 2"],
                answer: "(b)" // Updated to 15-B
            },
            {
                passage: "Passage<br>In some places in the world, the productivity of staples such as rice and wheat has reached a plateau. Neither new strains nor fancy agrochemicals are raising the yields. Nor is there much unfarmed land left that is suitable to be brought under the plough. If global temperature continues to rise, some places will become unsuitable for farming. Application of technology can help overcome these problems. Agricultural technology is changing fast. Much of this change is brought about by affluent farmers in the West/Americas. Techniques developed in the West are being adapted in some places to make tropical crops more productive. Technology is of little use if it is not adapted. In the developing world, that applies as much to existing farming techniques as it does to the latest advances in genetic modification. Extending to the smallholders and subsistence farmers of Africa and Asia the best of today's agricultural practices, in such simple matters as how much fertilizers to apply and when, would lead to a greatly increased availability of food for humanity. So would things like better roads and storage facilities, to allow for the carriage of surpluses to markets and reduce wastage.",
                question: "Based on the above passage, the following assumptions have been made:<br>1. Poor countries need to bring about change in their existing farming techniques.<br>2. Developed countries have better infrastructure and they waste less food.<br>Which of the above assumptions is/are valid?",
                options: ["(a) 1 only", "(b) 2 only", "(c) Both 1 and 2", "(d) Neither 1 nor 2"],
                answer: "(d)" // Updated to 16-D
            },
            {
                passage: "Passage<br>In some places in the world, the productivity of staples such as rice and wheat has reached a plateau. Neither new strains nor fancy agrochemicals are raising the yields. Nor is there much unfarmed land left that is suitable to be brought under the plough. If global temperature continues to rise, some places will become unsuitable for farming. Application of technology can help overcome these problems. Agricultural technology is changing fast. Much of this change is brought about by affluent farmers in the West/Americas. Techniques developed in the West are being adapted in some places to make tropical crops more productive. Technology is of little use if it is not adapted. In the developing world, that applies as much to existing farming techniques as it does to the latest advances in genetic modification. Extending to the smallholders and subsistence farmers of Africa and Asia the best of today's agricultural practices, in such simple matters as how much fertilizers to apply and when, would lead to a greatly increased availability of food for humanity. So would things like better roads and storage facilities, to allow for the carriage of surpluses to markets and reduce wastage.",
                question: "Based on the above passage, the following assumptions have been made:<br>1. Growing enough food for future generations will be a challenge.<br>2. Corporate farming is a viable option for food security in poor countries.<br>Which of the above assumptions is/are valid?",
                options: ["(a) 1 only", "(b) 2 only", "(c) Both 1 and 2", "(d) Neither 1 nor 2"],
                answer: "(c)" // Updated to 17-C
            },
            {
                passage: "",
                question: "The letters A, B, C, D and E are arranged in such a way that there are exactly two letters between A and E. How many such arrangements are possible?",
                options: ["(a) 12", "(b) 18", "(c) 24", "(d) 36"],
                answer: "(b)" // Updated to 18-B
            },
            {
                passage: "",
                question: "Consider the Question and two Statements given below:<br>Question: Is Z brother of X?<br>Statement-1: X is a brother of Y and Y is a brother of Z.<br>Statement-2: X, Y and Z are siblings.<br>Which one of the following is correct in respect of the Question and the Statements?",
                options: ["(a) Statement-1 alone is sufficient to answer the Question", "(b) Statement-2 alone is sufficient to answer the Question", "(c) Both Statement-1 and Statement-2 are sufficient to answer the Question", "(d) Both Statement-1 and Statement-2 are not sufficient to answer the Question"],
                answer: "(d)" // Updated to 19-D
            },
            {
                passage: "",
                question: "On one side of a 1.01 km long road, 101 plants are planted at equal distance from each other. What is the total distance between 5 consecutive plants?",
                options: ["(a) 40 m", "(b) 40.4 m", "(c) 50 m", "(d) 50.5 m"],
                answer: "(b)" // Updated to 20-B
            },
            {
                passage: "",
                question: "A, B and C are three places such that there are three different roads from A to B, four different roads from B to C and three different roads from A to C. In how many different ways can one travel from A to C using these roads?",
                options: ["(a) 10", "(b) 13", "(c) 15", "(d) 36"],
                answer: "(d)" // Updated to 21-D
            },
            {
                passage: "",
                question: "A has some coins. He gives half of the coins and 2 more to B. B gives half of the coins and 2 more to C. C gives half of the coins and 2 more to D. The number of coins D has now, is the smallest two-digit number. How many coins does A have in the beginning?",
                options: ["(a) 76", "(b) 68", "(c) 60", "(d) 52"],
                answer: "(a)" // Updated to 22-A
            },
            {
                passage: "",
                question: "In the series AABABCABCABCDE.., which letter appears at the 100th place?",
                options: ["(a) G", "(b) H", "(c) I", "(d) J"],
                answer: "(a)" // Updated to 23-A
            },
            {
                passage: "",
                question: "Three persons A, B and C are standing in a queue not necessarily in the same order. There are 4 persons between A and B, and 7 persons between B and C. If there are 11 persons ahead of C and 13 behind A, what could be the minimum number of persons in the queue?",
                options: ["(a) 22", "(b) 28", "(c) 32", "(d) 38"],
                answer: "(c)" // Updated to 24-C
            },
            {
                passage: "Passage-1<br>Natural selection cannot anticipate future environments on the earth. Therefore, the set of existing organisms can never be fully prepared for environmental catastrophes that await life. An outcome of this is the extinction of those species which cannot overcome environmental adversity. This failure to survive, in modern terms, can be attributed to the genomes which are unable to withstand geological vagaries or biological mishaps (infections, diseases and so on). In biological evolution on the earth, extinction of species has been a major feature. The earth may presently have up to ten million species, yet more than 90% of species that have ever lived on the earth are now extinct. Once again, the creationist doctrines fail to satisfactorily address why a divine creator will firstly bother to create millions of species and then allow them to perish. The Darwinian explanation for extinct life is once again simple, elegant and at once convincing—organisms go extinct as a function of environmental or biological assaults for which their inheritance deems them ill-equipped. Therefore, the so-called Darwinian theory of evolution is not a theory at all. Evolution happens—this is a fact. The mechanism of evolution (Darwin proposed natural selection) is amply supported by scientific data. Indeed, to date no single zoological, botanical, geological, paleontological, genetic or physical evidence has refuted either of the central two main Darwinian ideas. If religion is not taken into consideration, Darwinian laws are acceptable just like the laws proposed by Copernicus, Galileo, Newton and Einstein—sets of natural laws that explain natural phenomena in the universe.",
                question: "According to the passage, natural selection cannot anticipate future environments on the earth as<br>1. species not fully prepared to face the environmental changes that await them will face extinction<br>2. all the existing species would get extinct as their genomes will not withstand biological mishaps<br>3. inability of the genome to withstand environmental changes would result in extinction<br>4. extinction of species is a common feature<br>Select the correct answer using the code given below.",
                options: ["(a) 1, 2 and 3", "(b) 2, 3 and 4", "(c) 1, 3 and 4", "(d) 1, 2 and 4"],
                answer: "(d)" // Updated to 25-D
            },
            {
                passage: "Passage-1<br>Natural selection cannot anticipate future environments on the earth. Therefore, the set of existing organisms can never be fully prepared for environmental catastrophes that await life. An outcome of this is the extinction of those species which cannot overcome environmental adversity. This failure to survive, in modern terms, can be attributed to the genomes which are unable to withstand geological vagaries or biological mishaps (infections, diseases and so on). In biological evolution on the earth, extinction of species has been a major feature. The earth may presently have up to ten million species, yet more than 90% of species that have ever lived on the earth are now extinct. Once again, the creationist doctrines fail to satisfactorily address why a divine creator will firstly bother to create millions of species and then allow them to perish. The Darwinian explanation for extinct life is once again simple, elegant and at once convincing—organisms go extinct as a function of environmental or biological assaults for which their inheritance deems them ill-equipped. Therefore, the so-called Darwinian theory of evolution is not a theory at all. Evolution happens—this is a fact. The mechanism of evolution (Darwin proposed natural selection) is amply supported by scientific data. Indeed, to date no single zoological, botanical, geological, paleontological, genetic or physical evidence has refuted either of the central two main Darwinian ideas. If religion is not taken into consideration, Darwinian laws are acceptable just like the laws proposed by Copernicus, Galileo, Newton and Einstein—sets of natural laws that explain natural phenomena in the universe.",
                question: "The passage suggests that Darwinian theory of evolution is not a theory at all because",
                options: ["(a) it does not satisfy the creationist doctrine", "(b) extinction is a function of environment and biological assaults", "(c) there are no evidences to refute it", "(d) existence of organisms is attributed to a creator"],
                answer: "(b)" // Updated to 26-B
            },
            {
                passage: "Passage-1<br>Natural selection cannot anticipate future environments on the earth. Therefore, the set of existing organisms can never be fully prepared for environmental catastrophes that await life. An outcome of this is the extinction of those species which cannot overcome environmental adversity. This failure to survive, in modern terms, can be attributed to the genomes which are unable to withstand geological vagaries or biological mishaps (infections, diseases and so on). In biological evolution on the earth, extinction of species has been a major feature. The earth may presently have up to ten million species, yet more than 90% of species that have ever lived on the earth are now extinct. Once again, the creationist doctrines fail to satisfactorily address why a divine creator will firstly bother to create millions of species and then allow them to perish. The Darwinian explanation for extinct life is once again simple, elegant and at once convincing—organisms go extinct as a function of environmental or biological assaults for which their inheritance deems them ill-equipped. Therefore, the so-called Darwinian theory of evolution is not a theory at all. Evolution happens—this is a fact. The mechanism of evolution (Darwin proposed natural selection) is amply supported by scientific data. Indeed, to date no single zoological, botanical, geological, paleontological, genetic or physical evidence has refuted either of the central two main Darwinian ideas. If religion is not taken into consideration, Darwinian laws are acceptable just like the laws proposed by Copernicus, Galileo, Newton and Einstein—sets of natural laws that explain natural phenomena in the universe.",
                question: "With reference to the passage, the following assumptions have been made:<br>1. Only species that have the ability to overcome environmental catastrophes will survive and perpetuate.<br>2. More than 90% of the species on the earth are in the danger of getting extinct due to drastic changes in the environment.<br>3. Darwin’s theory explains all the natural phenomena.<br>Which of the above assumptions is/are valid?",
                options: ["(a) 1 only", "(b) 1 and 2 only", "(c) 3 only", "(d) 1, 2 and 3"],
                answer: "(c)" // Updated to 27-C
            },
            {
                passage: "Passage-2<br>With steady economic growth, higher literacy and increasing skill levels, the number of Indian middle-class families has gone up exponentially. Direct results of the affluence have been changes in dietary patterns and energy consumption levels. People have moved to a higher protein-based diet like milk products, fish and meat, all of which need significantly more water to produce than cereal-based diets. Increasing use of electronic and electric machines/gadgets and motor vehicles needs more and more energy and generation of energy needs water.",
                question: "Which one of the following statements best reflects the crux of the passage?",
                options: ["(a) People should be persuaded to continue with the mainly Indian traditional cereal-based diets.", "(b) India needs to focus on developing agricultural productivity and capacity for more energy generation in the coming years.", "(c) Modern technological developments result in the change of cultural and social behaviour of the people.", "(d) Water management practices in India need to change dramatically in the coming years."],
                answer: "(d)" // Updated to 28-D
            },
            {
                passage: "",
                question: "How many seconds in total are there in x weeks, x days, x hours, x minutes and x seconds?",
                options: ["(a) 11580x", "(b) 11581x", "(c) 694860x", "(d) 694861x"],
                answer: "(c)" // Updated to 29-C
            },
            {
                passage: "",
                question: "P, Q, R, S, T and U are six members of a family. R is the spouse of Q. U is the mother of T and S is the daughter of U. P's daughter is T and R's son is P. There are two couples in the family. Which one of the following is correct?",
                options: ["(a) Q is the grandfather of T", "(b) Q is the grandmother of T", "(c) R is the mother of P", "(d) T is the granddaughter of Q"],
                answer: "(a)" // Updated to 30-A
            },
            {
                passage: "",
                question: "Consider the Statements given below in respect of Question: How far is city P from city R?<br>Statement-1: City Q is 18 km from city R.<br>Statement-2: City P is 43 km from city Q.<br>Which one of the following is correct in respect of the Question and the Statements?",
                options: ["(a) Statement-1 alone is sufficient to answer the Question", "(b) Statement-2 alone is sufficient to answer the Question", "(c) Both Statement-1 and Statement-2 are sufficient to answer the Question", "(d) Both Statement-1 and Statement-2 are not sufficient to answer the Question"],
                answer: "(c)" // Updated to 31-C
            },
            {
                passage: "",
                question: "Two Statements followed by four Conclusions are given below. You have to take the Statements to be true even if they seem to be at variance from the commonly known facts. Read all the Conclusions and then decide which of the given Conclusions logically follows/follow from the Statements, disregarding the commonly known facts:<br>Statement-1: All pens are books.<br>Statement-2: No chair is a pen.<br>Conclusion-I: All chairs are books.<br>Conclusion-II: Some chairs are pens.<br>Conclusion-III: All books are chairs.<br>Conclusion-IV: No chair is a book.<br>Which one of the following is correct?",
                options: ["(a) Only Conclusion-I", "(b) Only Conclusion-II", "(c) Both Conclusion-III and Conclusion-IV", "(d) None of the Conclusions follows"],
                answer: "(b)" // Updated to 32-B
            },
            {
                passage: "",
                question: "Three Statements followed by three Conclusions are given below. You have to take the Statements to be true even if they seem to be at variance from the commonly known facts. Read all the Conclusions and then decide which of the given Conclusions logically follows/follow from the Statements, disregarding the commonly known facts:<br>Statement-1: Some doctors are teachers.<br>Statement-2: All teachers are engineers.<br>Statement-3: All engineers are scientists.<br>Conclusion-I: Some scientists are doctors.<br>Conclusion-II: All engineers are doctors.<br>Conclusion-III: Some engineers are doctors.<br>Which one of the following is correct?",
                options: ["(a) Only Conclusion-I", "(b) Only Conclusion-II", "(c) Both Conclusion-I and Conclusion-III", "(d) Both Conclusion-I and Conclusion-II"],
                answer: "(a)" // Updated to 33-A
            },
            {
                passage: "",
                question: "Eight students A, B, C, D, E, F, G and H sit around a circular table, equidistant from each other, facing the centre of the table, not necessarily in the same order. B and D sit neither adjacent to C nor opposite to C. A sits in between B and D, and F sits in between B and H. Which one of the following is definitely correct?",
                options: ["(a) B sits in between A and G", "(b) C sits opposite to G", "(c) E sits opposite to F", "(d) None of the above"],
                answer: "(d)" // Updated to 34-D
            },
            {
                passage: "Passage-1<br>Can a person who is not a lover of music, really enjoy a concert? It seems to be impossible. We enjoy only those things in which we take a personal interest. In order to enjoy a concert, one must be a lover of music. A person who attends a concert and is not a lover of music will not enjoy it, even though he may pretend to do so in order to impress others.",
                question: "Which one of the following statements best reflects the crux of the passage?",
                options: ["(a) Only music lovers can enjoy concerts.", "(b) People who are not music lovers should not attend concerts.", "(c) Pretending to enjoy a concert is common among non-music lovers.", "(d) Enjoyment of a concert is independent of one’s interest in music."],
                answer: "(d)" // Updated to 35-D
            },
            {
                passage: "Passage-2<br>Education is a lifelong process. It does not stop after one gets a degree or a job. The moment a person stops learning, he or she starts to stagnate. Lifelong education ensures that a person remains dynamic and capable of adapting to changing circumstances.",
                question: "What is the main idea conveyed by the passage?",
                options: ["(a) Education is only valuable if it continues throughout life.", "(b) A degree is not the end of education.", "(c) Lifelong learning is essential for personal growth and adaptability.", "(d) People who stop learning after a degree cannot succeed."],
                answer: "(c)" // Updated to 36-C
            },
            {
                passage: "",
                question: "A person travels 12 km in the southward direction and then travels 5 km to the right and then travels 15 km toward the right and finally travels 5 km towards the east. How far is he from his starting place?",
                options: ["(a) 5 km", "(b) 10 km", "(c) 15 km", "(d) 20 km"],
                answer: "(d)" // Updated to 37-D
            },
            {
                passage: "",
                question: "Consider the following statements in respect of five candidates P, Q, R, S and T:<br>Statement-1: P and Q are the top two rankers.<br>Statement-2: R is ranked third, S fourth and T fifth.<br>Which one of the following is correct in respect of the above Statements?",
                options: ["(a) Statement-1 alone is sufficient to determine the complete ranking", "(b) Statement-2 alone is sufficient to determine the complete ranking", "(c) Both Statement-1 and Statement-2 are needed to determine the complete ranking", "(d) Neither Statement-1 nor Statement-2 is sufficient to determine the complete ranking"],
                answer: "(d)" // Updated to 38-D
            },
            {
                passage: "",
                question: "A, B, C, D and E are five persons sitting in a circle facing the centre. A is to the immediate left of B, C is to the immediate right of B, and D is to the immediate left of E. Which one of the following is correct?",
                options: ["(a) E is to the immediate right of C", "(b) D is to the immediate left of A", "(c) E is to the immediate right of A", "(d) C is to the immediate left of D"],
                answer: "(c)" // Updated to 39-C
            },
            {
                passage: "",
                question: "What is the value of 1 + 2 + 3 + ... + 50?",
                options: ["(a) 1225", "(b) 1275", "(c) 1325", "(d) 1375"],
                answer: "(d)" // Updated to 40-D
            },
            {
                passage: "Passage-1<br>Discipline is necessary for success in any field. Without discipline, one cannot achieve consistency, and without consistency, success is impossible. Many people fail because they lack the discipline to follow through on their plans.",
                question: "What is the main idea conveyed by the passage?",
                options: ["(a) Success is impossible without discipline.", "(b) Discipline ensures consistency, which is key to success.", "(c) Many people lack discipline.", "(d) Consistency alone is sufficient for success."],
                answer: "(b)" // Updated to 41-B
            },
            {
                passage: "Passage-2<br>Honesty is the best approach in life. While dishonesty may bring short-term gains, it often leads to long-term problems. An honest person earns trust and respect, which are far more valuable than temporary benefits.",
                question: "Which one of the following statements best reflects the message of the passage?",
                options: ["(a) Dishonesty always leads to failure.", "(b) Honesty brings more valuable long-term benefits than dishonesty.", "(c) Short-term gains are not important.", "(d) Trust and respect can only be earned through honesty."],
                answer: "(d)" // Updated to 42-D
            },
            {
                passage: "",
                question: "A number when divided by 7 leaves a remainder of 3 and when divided by 11 leaves a remainder of 5. What is the smallest such number?",
                options: ["(a) 47", "(b) 52", "(c) 61", "(d) 73"],
                answer: "(b)" // Updated to 43-B
            },
            {
                passage: "",
                question: "Consider the following statements:<br>1. If the day after tomorrow is Wednesday, then today is Monday.<br>2. If today is Monday, then tomorrow is Tuesday.<br>Which one of the following is correct?",
                options: ["(a) Only 1 is true", "(b) Only 2 is true", "(c) Both 1 and 2 are true", "(d) Neither 1 nor 2 is true"],
                answer: "(d)" // Updated to 44-D
            },
            {
                passage: "",
                question: "In a certain code language, if CAT is written as 3120, then how is DOG written in that language?",
                options: ["(a) 4157", "(b) 4167", "(c) 4177", "(d) 4187"],
                answer: "(a)" // Updated to 45-A
            },
            {
                passage: "",
                question: "A, B, C, D and E are standing in a row facing north. A is to the left of B, B is to the right of C, C is to the left of D, and D is to the right of E. Who is in the middle?",
                options: ["(a) A", "(b) B", "(c) C", "(d) D"],
                answer: "(d)" // Updated to 46-D
            },
            {
                passage: "Passage-1<br>Optimism is a key trait for success. An optimist sees opportunities where others see obstacles. This mindset helps them overcome challenges and achieve their goals.",
                question: "What is the main idea conveyed by the passage?",
                options: ["(a) Optimism guarantees success.", "(b) Optimists see opportunities in challenges, aiding their success.", "(c) Pessimists cannot succeed.", "(d) Challenges are easy for optimists."],
                answer: "(c)" // Updated to 47-C
            },
            {
                passage: "Passage-2<br>We often feel thrilled by receiving presents as children, but as adults, this thrill diminishes. This could be because adults have more responsibilities, or because they have experienced so many things that few things excite them anymore.",
                question: "What is the main idea conveyed by the passage?",
                options: ["(a) Adults do not enjoy presents.", "(b) The thrill of receiving presents decreases as we grow older.", "(c) Children are more excited by presents than adults.", "(d) Responsibilities prevent adults from enjoying presents."],
                answer: "(d)" // Updated to 48-D
            },
            {
                passage: "Passage-2<br>We often feel thrilled by receiving presents as children, but as adults, this thrill diminishes. This could be because adults have more responsibilities, or because they have experienced so many things that few things excite them anymore.",
                question: "With reference to the passage, which one of the following statements is correct?",
                options: ["(a) It is not possible for adults to feel thrilled by presents.", "(b) There can be more than one reason why adults feel less thrilled by presents.", "(c) The author does not know why adults feel less thrilled by presents.", "(d) Adults have less capacity to feel the joy of loving or being loved."],
                answer: "(c)" // Updated to 49-C
            },
            {
                passage: "",
                question: "The author of the passage is against",
                options: ["(a) worrying too much about the past and future", "(b) being in the habit of thinking about presents", "(c) not being thrilled by new things", "(d) giving and receiving joy only partially"],
                answer: "(d)" // Updated to 50-D
            },
            {
                passage: "",
                question: "24 men and 12 women can do a piece of work in 30 days. In how many days can 12 men and 24 women do the same piece of work?",
                options: ["(a) 30 days", "(b) More than 30 days", "(c) Less than 30 days or more than 30 days", "(d) Data is inadequate to draw any conclusion"],
                answer: "(a)" // Updated to 51-A
            },
            {
                passage: "",
                question: "What is the remainder when 91 × 92 × 93 × 94 × 95 × 96 × 97 × 98 × 99 is divided by 1261?",
                options: ["(a) 3", "(b) 2", "(c) 1", "(d) 0"],
                answer: "(b)" // Updated to 52-B
            },
            {
                passage: "",
                question: "Consider the following statements in respect of a rectangular sheet of length 20 cm and breadth 8 cm:<br>1. It is possible to cut the sheet exactly into 4 square sheets.<br>2. It is possible to cut the sheet into 10 triangular sheets of equal area.<br>Which of the above statements is/are correct?",
                options: ["(a) 1 only", "(b) 2 only", "(c) Both 1 and 2", "(d) Neither 1 nor 2"],
                answer: "(a)" // Updated to 53-A
            },
            {
                passage: "",
                question: "When 70% of a number x is added to another number y, the sum becomes 165% of the value of y. When 60% of the number x is added to another number z, then the sum becomes 165% of the value of z. Which one of the following is correct?",
                options: ["(a) z < x < y", "(b) x < y < z", "(c) y < x < z", "(d) z < y < x"],
                answer: "(a)" // Updated to 54-A
            },
            {
                passage: "",
                question: "Let A, B and C represent distinct nonzero digits. Suppose x is the sum of all possible 3-digit numbers formed by A, B and C without repetition. Consider the following statements:<br>1. The 4-digit least value of x is 1332.<br>2. The 3-digit greatest value of x is 888.<br>Which of the above statements is/are correct?",
                options: ["(a) 1 only", "(b) 2 only", "(c) Both 1 and 2", "(d) Neither 1 nor 2"],
                answer: "(c)" // Updated to 55-C
            },
            {
                passage: "",
                question: "There is a numeric lock which has a 3-digit PIN. The PIN contains digits 1 to 7. There is no repetition of digits. The digits in the PIN from left to right are in decreasing order. Any two digits in the PIN differ by at least 2. How many maximum attempts does one need to find out the PIN with certainty?",
                options: ["(a) 6", "(b) 8", "(c) 10", "(d) 12"],
                answer: "(a)" // Updated to 56-A
            },
            {
                passage: "",
                question: "There are eight equidistant points on a circle. How many right-angled triangles can be drawn using these points as vertices and taking the diameter as one side of the triangle?",
                options: ["(a) 24", "(b) 16", "(c) 12", "(d) 8"],
                answer: "(d)" // Updated to 57-D
            },
            {
                passage: "",
                question: "If 15 × 14 × 13 × … × 3 × 2 × 1 = 3^m × n where m and n are positive integers, then what is the maximum value of m?",
                options: ["(a) 7", "(b) 6", "(c) 5", "(d) 4"],
                answer: "(d)" // Updated to 58-D
            },
            {
                passage: "",
                question: "What is the value of X in the sequence 2, 12, 36, 80, 150, X?",
                options: ["(a) 248", "(b) 252", "(c) 258", "(d) 262"],
                answer: "(c)" // Updated to 59-C
            },
            {
                passage: "",
                question: "One non-zero digit, one vowel and one consonant from English alphabet (in capital) are to be used in forming passwords, such that each password has to start with a vowel and end with a consonant. How many such passwords can be generated?",
                options: ["(a) 105", "(b) 525", "(c) 945", "(d) 1050"],
                answer: "(a)" // Updated to 60-A
            },
            {
                passage: "Passage-1<br>The majority of people who fail to accumulate money sufficient for their needs, are generally, easily influenced by the opinions of others. They permit the newspapers and the gossiping neighbours to do their thinking for them. Opinions are the cheapest commodities on the earth. Everyone has a flock of opinions ready to be wished upon by anyone who will accept them. If you are influenced by opinions when you reach decisions, you will not succeed in any undertaking.",
                question: "Which one of the following is implied by the passage?",
                options: ["(a) Most of the people do not accumulate money for their needs.", "(b) Most of the people never fail to accumulate money for their needs.", "(c) There are people who fail to accumulate money for their needs.", "(d) There is no need to accumulate money."],
                answer: "(c)" // Updated to 61-C
            },
            {
                passage: "Passage-1<br>The majority of people who fail to accumulate money sufficient for their needs, are generally, easily influenced by the opinions of others. They permit the newspapers and the gossiping neighbours to do their thinking for them. Opinions are the cheapest commodities on the earth. Everyone has a flock of opinions ready to be wished upon by anyone who will accept them. If you are influenced by opinions when you reach decisions, you will not succeed in any undertaking.",
                question: "What is the main idea of the passage?",
                options: ["(a) People should not be influenced by the opinions of others.", "(b) People should accumulate as much money as they can.", "(c) People should neither give nor accept the opinions.", "(d) People will succeed in any undertaking if they do not accept any opinion at all."],
                answer: "(a)" // Updated to 62-A
            },
            {
                passage: "Passage-2<br>'The social order is a sacred right which is the basis of all other rights. Nevertheless, this right does not come from nature, and must therefore be founded on conventions.'",
                question: "With reference to the above passage, which of the following statements is/are correct?<br>1. Conventions are the sources of rights of man.<br>2. Rights of man can be exercised only when there is a social order.<br>Select the correct answer using the code given below.",
                options: ["(a) 1 only", "(b) 2 only", "(c) Both 1 and 2", "(d) Neither 1 nor 2"],
                answer: "(c)" // Updated to 63-C
            },
            {
                passage: "",
                question: "Two candidates X and Y contested an election. 80% of voters cast their vote and there were no invalid votes. There was no NOTA (None of the above) option. X got 56% of the votes cast and won by 1440 votes. What is the total number of voters in the voters list?",
                options: ["(a) 15000", "(b) 12000", "(c) 9600", "(d) 5000"],
                answer: "(a)" // Updated to 64-A
            },
            {
                passage: "",
                question: "What is the smallest number greater than 1000 that when divided by any one of the numbers 6, 9, 12, 15, 18 leaves a remainder of 3?",
                options: ["(a) 1063", "(b) 1073", "(c) 1083", "(d) 1183"],
                answer: "(c)" // Updated to 65-C
            },
            {
                passage: "",
                question: "Let p be a two-digit number and q be the number consisting of same digits written in reverse order. If p × q = 2430, then what is the difference between p and q?",
                options: ["(a) 45", "(b) 27", "(c) 18", "(d) 9"],
                answer: "(d)" // Updated to 66-D
            },
            {
                passage: "",
                question: "Consider the following statements in respect of two natural numbers p and q such that p is a prime number and q is a composite number:<br>1. p × q can be an odd number.<br>2. q/p can be a prime number.<br>3. p + q can be a prime number.<br>Which of the above statements are correct?",
                options: ["(a) 1 and 2 only", "(b) 2 and 3 only", "(c) 1 and 3 only", "(d) 1, 2 and 3"],
                answer: "(d)" // Updated to 67-D
            },
            {
                passage: "",
                question: "Consider the following statements:<br>1. Between 3:16 p.m. and 3:17 p.m., both hour hand and minute hand coincide.<br>2. Between 4:58 p.m. and 4:59 p.m., both minute hand and second hand coincide.<br>Which of the above statements is/are correct?",
                options: ["(a) 1 only", "(b) 2 only", "(c) Both 1 and 2", "(d) Neither 1 nor 2"],
                answer: "(c)" // Updated to 68-C
            },
            {
                passage: "",
                question: "There are two containers X and Y. X contains 100 ml of milk and Y contains 100 ml of water. 20 ml of milk from X is transferred to Y. After mixing well, 20 ml of the mixture in Y is transferred back to X. If m denotes the proportion of milk in X and n denotes the proportion of water in Y, then which one of the following is correct?",
                options: ["(a) m = n", "(b) m > n", "(c) m < n", "(d) Cannot be determined due to insufficient data"],
                answer: "(a)" // Updated to 69-A
            },
            {
                passage: "",
                question: "A pie chart gives the expenditure on five different items A, B, C, D and E in a household. If B, C, D and E correspond to 90°, 50°, 45° and 75° respectively, then what is the percentage of expenditure on item A?",
                options: ["(a) 112/9", "(b) 125/6", "(c) 155/9", "(d) 250/9"],
                answer: "(d)" // Updated to 70-D
            },
            {
                passage: "Passage-1<br>To encourage research is one of the functions of a university. Contemporary universities have encouraged research, not only in those cases where research is necessary, but on all sorts of entirely unprofitable subjects as well. Scientific research is probably never completely valueless. However silly and insignificant it may seem, however mechanical and unintelligent the labours of the researchers, there is always a chance that the results may be of value to the investigator of talent, who can use the facts collected for him by uninspired but industrious researchers as the basis of some fruitful generalization. But where research is not original, but consists in the mere rearrangement of existing materials, where its object is not scientific but literary or historical, then there is a risk of the whole business becoming merely futile.",
                question: "The author’s assumption about scientific research is that",
                options: ["(a) it is never very valuable", "(b) it is sometimes very valuable", "(c) it is never without some value", "(d) it is always very valuable"],
                answer: "(c)" // Updated to 71-C
            },
            {
                passage: "Passage-1<br>To encourage research is one of the functions of a university. Contemporary universities have encouraged research, not only in those cases where research is necessary, but on all sorts of entirely unprofitable subjects as well. Scientific research is probably never completely valueless. However silly and insignificant it may seem, however mechanical and unintelligent the labours of the researchers, there is always a chance that the results may be of value to the investigator of talent, who can use the facts collected for him by uninspired but industrious researchers as the basis of some fruitful generalization. But where research is not original, but consists in the mere rearrangement of existing materials, where its object is not scientific but literary or historical, then there is a risk of the whole business becoming merely futile.",
                question: "According to the author",
                options: ["(a) not many research results can be of value to an intelligent investigator", "(b) research that is not original has some value", "(c) universities should stop encouraging unprofitable research", "(d) all research results are valuable to investigators"],
                answer: "(c)" // Updated to 72-C
            },
            {
                passage: "",
                question: "There are 9 cups placed on a table arranged in equal number of rows and columns out of which 6 cups contain coffee and 3 cups contain tea. In how many ways can they be arranged so that each row should contain at least one cup of coffee?",
                options: ["(a) 18", "(b) 27", "(c) 54", "(d) 81"],
                answer: "(d)" // Updated to 73-D
            },
            {
                passage: "",
                question: "The sum of three consecutive integers, equal to their product. How many such possibilities are there?",
                options: ["(a) Only one", "(b) Only two", "(c) Only three", "(d) No such possibility is there"],
                answer: "(b)" // Updated to 74-B
            },
            {
                passage: "",
                question: "What is the number of numbers of the form 0.XY, where X and Y are distinct non-zero digits?",
                options: ["(a) 72", "(b) 81", "(c) 90", "(d) 100"],
                answer: "(b)" // Updated to 75-B
            },
            {
                passage: "",
                question: "The average weight of A, B, C is 40 kg, the average weight of B, D, E is 42 kg and the weight of F is equal to that of B. What is the average weight of A, B, C, D, E and F?",
                options: ["(a) 40.5 kg", "(b) 40.8 kg", "(c) 41 kg", "(d) Cannot be determined as data is inadequate"],
                answer: "(c)" // Updated to 76-C
            },
            {
                passage: "",
                question: "What is the value of X in the sequence 2, 12, 36, 80, 150, X?",
                options: ["(a) 248", "(b) 252", "(c) 258", "(d) 262"],
                answer: "(d)" // Updated to 77-D
            },
            {
                passage: "",
                question: "One non-zero digit, one vowel and one consonant from English alphabet (in capital) are to be used in forming passwords, such that each password has to start with a vowel and end with a consonant. How many such passwords can be generated?",
                options: ["(a) 105", "(b) 525", "(c) 945", "(d) 1050"],
                answer: "(c)" // Updated to 78-C
            },
            {
                passage: "",
                question: "There are 9 cups placed on a table arranged in equal number of rows and columns out of which 6 cups contain coffee and 3 cups contain tea. In how many ways can they be arranged so that each row should contain at least one cup of coffee?",
                options: ["(a) 18", "(b) 27", "(c) 54", "(d) 81"],
                answer: "(a)" // Updated to 79-A
            },
            {
                passage: "",
                question: "The average weight of A, B, C is 40 kg, the average weight of B, D, E is 42 kg and the weight of F is equal to that of B. What is the average weight of A, B, C, D, E and F?",
                options: ["(a) 40.5 kg", "(b) 40.8 kg", "(c) 41 kg", "(d) Cannot be determined as data is inadequate"],
                answer: "(c)" // Updated to 80-C
            }
        ]
    }
};
