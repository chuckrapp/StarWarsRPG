$(document).ready(function() {

    var charStart = [];
    var yourChar = [];
    var availEnemies = [];
    var compDefender = [];
    var gameState = 1;
    var status = "Choose your Character";
    var roundCount = 1;

    var charOne = {
        charName: "Test1",
        playerChar: false,
        compDefender: false,
        availEnemy: false,
        hitPoints: 101,
        attackPower: 1,
        displayCharID: function() {
            return this;
        },
        displayName: function() {
            return this.charName;
        },
        displayHP: function() {
            return this.hitPoints;
        },
        displayAP: function() {
            return this.attackPower;
        }
    };

    var charTwo = {
        charName: "Test2",
        playerChar: false,
        compDefender: false,
        availEnemy: false,
        hitPoints: 102,
        attackPower: 2,
        displayCharID: function() {
            return this;
        },
        displayName: function() {
            return this.charName;
        },
        displayHP: function() {
            return this.hitPoints;
        },
        displayAP: function() {
            return this.attackPower;
        }
    };
    var charThree = {
        charName: "Test3",
        playerChar: false,
        compDefender: false,
        availEnemy: false,
        hitPoints: 103,
        attackPower: 3,
        displayCharID: function() {
            return this;
        },
        displayName: function() {
            return this.charName;
        },
        displayHP: function() {
            return this.hitPoints;
        },
        displayAP: function() {
            return this.attackPower;
        }
    };
    var charFour = {
        charName: "Test4",
        playerChar: false,
        compDefender: false,
        availEnemy: false,
        hitPoints: 104,
        attackPower: 4,
        displayCharID: function() {
            return this;
        },
        displayName: function() {
            return this.charName;
        },
        displayHP: function() {
            return this.hitPoints;
        },
        displayAP: function() {
            return this.attackPower;
        }
    };




    $('#charOne, #charTwo, #charThree, #charFour').click(function() {
        switch (gameState) {
            case 1:
                gameState++;
                if (this.id == 'charOne') {
                    yourChar.push(charOne);
                    this.playerChar = true;
                    $("#charOneFrame").appendTo('#yourCharOutput');
                    $("#charTwoFrame").appendTo("#chooseOpponentOutput");
                    $("#charThreeFrame").appendTo("#chooseOpponentOutput");
                    $("#charFourFrame").appendTo("#chooseOpponentOutput");
                    attackerName = charOne.displayName();
                    attackerHP = charOne.displayHP();
                    attackerAP = charOne.displayAP();
                    attackerID = charOne.displayCharID();
                } else if (this.id == 'charTwo') {
                    yourChar.push(charTwo);
                    this.playerChar = true;
                    $("#charOneFrame").appendTo('#chooseOpponentOutput');
                    $("#charTwoFrame").appendTo("#yourCharOutput");
                    $("#charThreeFrame").appendTo("#chooseOpponentOutput");
                    $("#charFourFrame").appendTo("#chooseOpponentOutput");
                    attackerName = charTwo.displayName();
                    attackerHP = charTwo.displayHP();
                    attackerAP = charTwo.displayAP();
                    attackerID = charTwo.displayCharID();

                } else if (this.id == 'charThree') {
                    yourChar.push(charThree);
                    this.playerChar = true;
                    $("#charOneFrame").appendTo('#chooseOpponentOutput');
                    $("#charTwoFrame").appendTo("#chooseOpponentOutput");
                    $("#charThreeFrame").appendTo("#yourCharOutput");
                    $("#charFourFrame").appendTo("#chooseOpponentOutput");
                    attackerName = charThree.displayName();
                    attackerHP = charThree.displayHP();
                    attackerAP = charThree.displayAP();
                    attackerID = charThree.displayCharID();

                } else if (this.id == 'charFour') {
                    yourChar.push(charFour);
                    this.playerChar = true;
                    $("#charOneFrame").appendTo('#chooseOpponentOutput');
                    $("#charTwoFrame").appendTo("#chooseOpponentOutput");
                    $("#charThreeFrame").appendTo("#chooseOpponentOutput");
                    $("#charFourFrame").appendTo("#yourCharOutput");
                    attackerName = charFour.displayName();
                    attackerHP = charFour.displayHP();
                    attackerAP = charFour.displayAP();
                    attackerID = charFour.displayCharID();

                }
                break

            case 2:
                if (this.id == 'charOne') {
                    compDefender.push(charOne);
                    this.compDefender = true;
                    $("#charOneFrame").appendTo("#defenderOutput");
                    defenderName = charOne.displayName();
                    defenderHP = charOne.displayHP();
                    defenderAP = charOne.displayAP();
                    defenderID = charOne.displayCharID();

                } else if (this.id == 'charTwo') {
                    compDefender.push(charTwo);
                    this.compDefender = true;
                    $("#charTwoFrame").appendTo("#defenderOutput");
                    defenderName = charTwo.displayName();
                    defenderHP = charTwo.displayHP();
                    defenderAP = charTwo.displayAP();
                    defenderID = charTwo.displayCharID();
                } else if (this.id == 'charThree') {
                    compDefender.push(charThree);
                    this.compDefender = true;
                    $("#charThreeFrame").appendTo("#defenderOutput");
                    defenderName = charThree.displayName();
                    defenderHP = charThree.displayHP();
                    defenderAP = charThree.displayAP();
                    defenderID = charThree.displayCharID();

                } else if (this.id == 'charFour') {
                    compDefender.push(charFour);
                    this.compDefender = true;
                    $("#charFourFrame").appendTo("#defenderOutput");
                    defenderName = charFour.displayName();
                    defenderHP = charFour.displayHP();
                    defenderAP = charFour.displayAP();
                    defenderID = charFour.displayCharID();
                }
                gameState++
                break
                case 3:
                
        };


    });

    $('#btnAttack').click(function() {
        newAttackerAP = attackerAP * roundCount;
        newAttackerHP = attackerHP - defenderAP;
        newDefenderHP = defenderHP - newAttackerAP;
        status = attackerName + " damaged " + defenderName + " for " + newAttackerAP;
        defenderHP = newDefenderHP;
        attackerHP = newAttackerHP;
        $("#statusOutput").html(status);
        roundCount++;

        checkHealth();

        function checkHealth() {
            if (newDefenderHP < 1) {
                btnAttack.disabled = true;
                console.log('defeated');
                status = 'You defeated ' + defenderName;
                updateAll();
                newOpponent();
            }
        }

        function newOpponent() {
            console.log('time for a new opponent');
            gameState++;
   


//
//
//      NEED TO GET THIS WORKING
//
//

        }

        if (defenderID === charOne) {
            charOne.hitPoints = newDefenderHP;
            $("#charOneHPOutput").html(charOne.displayHP());
        } else if (defenderID === charTwo) {
            charTwo.hitPoints = newDefenderHP;
            $("#charTwoHPOutput").html(charTwo.displayHP());
        } else if (defenderID === charThree) {
            charThree.hitPoints = newDefenderHP;
            $("#charThreeHPOutput").html(charThree.displayHP());
        } else if (defenderID === charFour) {
            charFour.hitPoints = newDefenderHP;
            $("#charFourHPOutput").html(charFour.displayHP());
        };

        if (attackerID === charOne) {
            charOne.hitPoints = newAttackerHP;
            charOne.attackPower = newAttackerAP;
            $("#charOneHPOutput").html(charOne.displayHP());
            $("#charOneAPOutput").html(charOne.displayAP());
        } else if (attackerID === charTwo) {
            charTwo.hitPoints = newAttackerHP;
            charTwo.attackPower = newAttackerAP;
            $("#charTwoHPOutput").html(charTwo.displayHP());
            $("#charTwoAPOutput").html(charTwo.displayAP());
        } else if (attackerID === charThree) {
            charThree.hitPoints = newAttackerHP;
            charThree.attackPower = newAttackerAP;
            $("#charThreeHPOutput").html(charThree.displayHP());
            $("#charThreeAPOutput").html(charThree.displayAP());
        } else if (attackerID === charFour) {
            charFour.hitPoints = newAttackerHP;
            charFour.attackPower = newAttackerAP;
            $("#charFourHPOutput").html(charFour.displayHP());
            $("#charFourAPOutput").html(charFour.displayAP());
        };

    });

    updateAll();


    function updateAll() {
        $("#charOneNameOutput").html(charOne.displayName());
        $("#charOneHPOutput").html(charOne.displayHP());
        $("#charOneAPOutput").html(charOne.displayAP());


        $("#charTwoNameOutput").html(charTwo.displayName());
        $("#charTwoHPOutput").html(charTwo.displayHP());
        $("#charTwoAPOutput").html(charTwo.displayAP());

        $("#charThreeNameOutput").html(charThree.displayName());
        $("#charThreeHPOutput").html(charThree.displayHP());
        $("#charThreeAPOutput").html(charThree.displayAP());

        $("#charFourNameOutput").html(charFour.displayName());
        $("#charFourHPOutput").html(charFour.displayHP());
        $("#charFourAPOutput").html(charFour.displayAP());

        $("#statusOutput").html(status);
    }

});
