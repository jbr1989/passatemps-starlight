---
title: Resoldre Sudoku
# template: splash
description: A reference page in my new Starlight docs site.
sidebar:
    label: Resoldre # Configura una etiqueta personalizada para el enlace
    order: 3
---

### Mètodes de resoldre

<p>L'estratègia per a resoldre un sudoku es pot considerar com la combinació de tres processos: escaneig, marcat i anàlisi.</p>

<h3>Escaneig</h3>
<p>L'escaneig es realitza des del principi i periòdicament, durant tota la resolució. L'escaneig consta de dues tècniques bàsiques: trama creuada i recompte, que poden usar-se alternativament.</p> 
<dl>
    <dt class="sub">Trama creuada:</dt>
    <dd>
        <p>Es tracta de l'escaneig de files (o columnes) per a identificar quina línia en una regió particular pot contenir un nombre determinat mitjançant un procés d'eliminació. Aquest procés es repeteix amb les columnes (o files).</p> 
        <p>Per a obtenir resultats més ràpids, els nombres són escanejats de forma ordenada, segons la seva freqüència d'aparició. És important realitzar aquest procés sistemàticament, comprovant tots els dígits del 1 al 9.</p>
    </dd>
    <dt class="sub">Recompte</dt>
    <dd>
        <p>Es tracta de buscar els dígits 1-9 per regions, files i columnes per a identificar nombres perduts.</p>
        <p>El recompte basat en l'últim nombre descobert pot augmentar la velocitat de la recerca. També pot ser el cas (és típic en sudokus més difícils) que el valor d'una cel·la individual pugui ser determinat mitjançant un recompte invers, això és, escanejant la seva regió, fila o columna per a valors que no poden ser, per a veure quin és el que falta.</p> 
    </dd>
</dl>

<p>Els jugadors més avançats busquen contingències mentre escanegen, això és, fixen la ubicació d'un nombre en una fila, columna o regió o dues o tres cel·les. Quan aquestes cel·les estan totes en la mateixa fila (o columna) i regió, poden usar-se amb un propòsit d'eliminació durant la trama creuada i el recompte. Els sudokus particularment desafiadors poden requerir el reconeixement de múltiples contingències, potser en múltiples adreces o fins i tot interseccions relegant la majoria dels resolutors al marcat (com es descriu més a baix).</p> 
<p>Els sudokus que poden ser resolts només mitjançant escaneig, sense requerir la detecció de contingències es classifiquen com sudokus fàcils; altres sudokus més difícils, per definició, no poden resoldre únicament mitjançant escaneig.</p> 


<h3>Marcat</h3>
<p>L'escaneig s'atura quan no podem descobrir nous nombres. En aquest punt és necessari centrar-se en alguna anàlisi lògica. La majoria troba útil guiar aquesta anàlisi mitjançant el marcat de nombres candidats en les cel·les buides. Hi ha dues notacions populars: subíndexs i punts.</p>
<dl>
    <dt class="sub">Subíndex:</dt>
    <dd>
        <p>Els nombres candidats s'escriuen en petit en les cel·les. El desavantatge és que els puzles originals són publicats en periòdics que habitualment no deixen massa espai per a acomodar més d"uns pocs dígits. Si s'utilitza aquesta notació, els resolutors creen, sovint, una còpia més gran del puzle i empren un llapis afilat.</p> 
    </dd>
    <dt class="sub">Punts:</dt>
    <dd>
        <p>Es basa en un patró de punts amb un punt en el cantó superior esquerra representant un 1 i un punt en el cantó inferior dreta representant un 9. Aquesta notació té com a avantatge que pot usar-se en el puzle original. Es requereix destresa per a l'emplaçament dels punts, perquè punts desplaçats o marques distretes duen, inevitablement, a confusió i no són fàcils d'esborrar sense afegir més confusió.</p> 
    </dd>
</dl>

<h3>Anàlisis:</h3>
<p>Hi ha dues tècniques d'anàlisis principals: Eliminació i "i si...?".</p>
<dl>
    <dt class="sub">Eliminació:</dt>
    <dd>
        <p>L'anàlisis es realitza mitjançant la successiva eliminació de nombres candidats per a una o més cel·les, fins a deixar només una elecció.</p>
        <p>Després d'assolir cada resposta, ha de realitzar-se un nou escaneig (habitualment comprovant l'efecte de l'últim nombre). Hi ha una sèrie de tàctiques d'eliminació. Una de les més comunes és el "esborrat del candidat no coincident". Les cel·les amb idèntica configuració de nombres candidats es diu que coincideixen si la quantitat de nombres candidats en cadascuna és igual al nombre de cel·les que els contenen.</p>
        <p>Per exemple, es diu que cel·les coincideixen amb una particular fila, columna o regió si dues cel·les contenen el mateix parell de nombres candidats (p, q) i no altres, o si tres cel·les contenen el mateix triplet de nombres candidats (p, q, r) i no altres. Aquestes són, essencialment, contingències coincidents. Aquests nombres (p, q, r) que apareixen com candidats en qualsevol lloc en la mateixa fila, columna o regió en cel·les no coincidents, poden ser esborrats.</p> 
    </dd>
    <dt class="sub">I si...?:</dt>
    <dd>
        <p>Es basa a seleccionar una cel·la amb només dos nombres candidats i es realitza una conjectura. Les etapes de dalt es repeteixen tret que es trobi una duplicació, en aquest cas el candidat alternatiu és la solució. En termes lògics aquest mètode es coneix com reducció a l'absurd.</p>
        <p>Nishio és una forma limitada d'aquesta tècnica d'anàlisis: Per a cada candidat d'una cel·la, es pregunta: ¿Aquest nombre pot anar a una altra cel·la? Si la resposta és sí, llavors aquest candidat pot ser eliminat.</p>  
    </dd>
</dl>

<p>Idealment, es necessita trobar una combinació de tècniques que evitin algun dels inconvenients dels elements de dalt. El recompte de regions, files i columnes pot resultar avorrit. Escriure nombres candidats en cel·les buides pot consumir massa temps. La tècnica "i si...?" pot ser confusa tret que siguis molt organitzat. El quid de la qüestió és trobar una tècnica que minimitzi el recompte, el marcat i l'esborrat.</p>


### Nivell principiant

<ul id="resoldre" class="col_2">
    <li><h3>Exemple 1</h3>
        <ul>
            <li>
                <p>¿On es pot posar l'1 al quadrat (3×3) esquerre?</p>
                <img src="/img/sudoku/resoldre/sudoku_elem-01a.gif" alt="Exemple"/>
            </li>
            <li>
                <p>L'1 ja està en la fila superior i mitjana.</p>
                <img src="/img/sudoku/resoldre/sudoku_elem-01b.gif" alt="Exemple"/>
            </li>
            <li>
                <p>Així doncs, solament pots posar-lo a <img src="/img/sudoku/resoldre/taronja.gif" alt="Color taronja"/></p>
                <img src="/img/sudoku/resoldre/sudoku_elem-01c.gif" alt="Exemple"/>
            </li>
        </ul>
    </li>
    <li><h3>Exemple 2</h3>
        <ul>
            <li>
                <p>Com fer-lo?</p>
                <img src="/img/sudoku/resoldre/sudoku_elem-02a.gif" alt="Exemple"/>
            </li>
            <li>
                <p>No pot jutjar on col·locar-lo solament amb les files.</p>
                <img src="/img/sudoku/resoldre/sudoku_elem-02b.gif" alt="Exemple"/>
            </li>
            <li>
                <p>Mira la columna, llavors...</p>
                <img src="/img/sudoku/resoldre/sudoku_elem-02c.gif" alt="Exemple"/>
            </li>
            <li>
                <p>Ara ja pots col·locar-lo a <img src="/img/sudoku/resoldre/taronja.gif" alt="Color taronja"/></p>
                <img src="/img/sudoku/resoldre/sudoku_elem-02d.gif" alt="Exemple"/>
            </li>
        </ul>
    </li>
    <li><h3>Exemple 3</h3>
        <ul>
            <li>
                <p>On pots posar l'1 al quadrat d'alt-esquerre?</p>
                <img src="/img/sudoku/resoldre/sudoku_elem-03a.gif" alt="Exemple"/>
            </li>
            <li>
                <p>Mira les files al principi.</p>
                <img src="/img/sudoku/resoldre/sudoku_elem-03b.gif" alt="Exemple"/>
            </li>
            <li>
                <p>Llavors, mira les columnes.</p>
                <img src="/img/sudoku/resoldre/sudoku_elem-03c.gif" alt="Exemple"/>
            </li>
            <li>
                <p>En aquest cas solament pots posar-lo a <img src="/img/sudoku/resoldre/taronja.gif" alt="Color taronja"/>.</p>
                <img src="/img/sudoku/resoldre/sudoku_elem-03d.gif" alt="Exemple"/>
            </li>
        </ul>
    </li>
    <li><h3>Exemple 4</h3>
        <ul>
            <li>
                <p>On pots posar l'1 al quadrat d'alt-esquerre.<br/>
                Aquest patró és fácil i important.</p>
                <img src="/img/sudoku/resoldre/sudoku_elem-04a.gif" alt="Exemple"/>
            </li>
            <li>
                <p>Primer de tot mira la fila en aquest cas.</p>
                <img src="/img/sudoku/resoldre/sudoku_elem-04b.gif" alt="Exemple"/>
            </li>
            <li>
                <p>Després mira les columnes.</p>
                <img src="/img/sudoku/resoldre/sudoku_elem-04c.gif" alt="Exemple"/>
            </li>
            <li>
                <p>En aquest cas solament hi ha una solució <img src="/img/sudoku/resoldre/taronja.gif" alt="Color taronja"/>.</p>
                <img src="/img/sudoku/resoldre/sudoku_elem-04d.gif" alt="Exemple"/>
            </li>
        </ul>
    </li>
    <li><h3>Exemple 5</h3>
        <ul>
            <li>
                <p>Aquest és un altre patró.<br/>
                On es posarà l'1 en el quadrat d'alt-esquerre.</p>
                <img src="/img/sudoku/resoldre/sudoku_elem-05a.gif" alt="Exemple"/>
            </li>
            <li>
                <p>En aquesta fila hi ha els números del 2 al 9.</p>
                <img src="/img/sudoku/resoldre/sudoku_elem-05b.gif" alt="Exemple"/>
            </li>
            <li>
                <p>Per tant, l'1 solament pot anar en <img src="/img/sudoku/resoldre/taronja.gif" alt="Color taronja"/>.</p>
                <img src="/img/sudoku/resoldre/sudoku_elem-05c.gif" alt="Exemple"/>
            </li>
        </ul>
    </li>
</ul>


### Nivell intermedi

<ul id="resoldre" class="col_2">
    <li><h3>Exemple 1</h3>
        <ul>
            <li>
                <p>On pots posar l'1?</p>
                <img src="/img/sudoku/resoldre/sudoku_mid-01a.gif" alt="Exemple"/>
            </li>
            <li>
                <p>Primer mira les files i les columnes on hi ha un 1.</p>
                <img src="/img/sudoku/resoldre/sudoku_mid-01b.gif" alt="Exemple"/>
            </li>
            <li>
                <p>L'1 pot anar a dos llocs <img src="/img/sudoku/resoldre/violeta.gif" alt="Color violeta"/>, per ara no podem posar-lo.</p>
                <img src="/img/sudoku/resoldre/sudoku_mid-01c.gif" alt="Exemple"/>
            </li>
            <li>
                <p>Però si sabem que han d'anar en aquesta fila.</p>
                <img src="/img/sudoku/resoldre/sudoku_mid-01d.gif" alt="Exemple"/>
            </li>
            <li>
                <p>Per això l'1 solament pot anar aquí <img src="/img/sudoku/resoldre/taronja.gif" alt="Color taronja"/>.</p>
                <img src="/img/sudoku/resoldre/sudoku_mid-01e.gif" alt="Exemple"/>
            </li>
        </ul>
    </li>
    <li><h3>Exemple 2</h3>
        <ul>
            <li>
                <p>On podem posar l'1?</p>
                <img src="/img/sudoku/resoldre/sudoku_mid-02a.gif" alt="Exemple"/>
            </li>
            <li>
                <p>Abans mira si hi ha algun 1 que t'afecti.</p>
                <img src="/img/sudoku/resoldre/sudoku_mid-02b.gif" alt="Exemple"/>
            </li>
            <li>
                <p>Ara sabem que l'1 ha d'anar en la fila del mig <img src="/img/sudoku/resoldre/violeta.gif" alt="Color violeta"/>.</p>
                <img src="/img/sudoku/resoldre/sudoku_mid-02c.gif" alt="Exemple"/>
            </li>
            <li>
                <p>Gràcies a això, podem descartar una fila més.</p>
                <img src="/img/sudoku/resoldre/sudoku_mid-02d.gif" alt="Exemple"/>
            </li>
            <li>
                <p>Així doncs, solament pot anar en un lloc <img src="/img/sudoku/resoldre/taronja.gif" alt="Color taronja"/>.</p>
                <img src="/img/sudoku/resoldre/sudoku_mid-02e.gif" alt="Exemple"/>
            </li>
        </ul>
    </li>
    <li><h3>Exemple 3</h3>
        <ul>
            <li>
                <p>A poc a poc, es va complicant però no et preocupes. Recorda <a href="resoldre_principiant_sudoku.php">l'exemple 2</a> del principiant.<br/>
                On pots posar l'1?</p>
                <img src="/img/sudoku/resoldre/sudoku_mid-03a.gif" alt="Exemple"/>
            </li>
            <li>
                <p>Mira les files i columnes, en aquest cas l'1 solament pot anar en la fila de dalt <img src="/img/sudoku/resoldre/violeta.gif" alt="Color violeta"/>.</p>
                <img src="/img/sudoku/resoldre/sudoku_mid-03b.gif" alt="Exemple"/>
            </li>
            <li>
                <p>Per tant, l'1 solament pot anar en un lloc <img src="/img/sudoku/resoldre/taronja.gif" alt="Color taronja"/>.</p>
                <img src="/img/sudoku/resoldre/sudoku_mid-03c.gif" alt="Exemple"/>
            </li>
        </ul>
    </li>
    <li><h3>Exemple 4</h3>
        <ul>
            <li>
                <p>On pot anar l'1?</p>
                <img src="/img/sudoku/resoldre/sudoku_mid-04a.gif" alt="Exemple"/>
            </li>
            <li>
                <p>Pot anar en els dos <img src="/img/sudoku/resoldre/violeta.gif" alt="Color violeta"/>.<br/>
                Has de mirar les columnes.</p>
                <img src="/img/sudoku/resoldre/sudoku_mid-04b.gif" alt="Exemple"/>
            </li>
            <li>
                <p>1 solament pot anar a <img src="/img/sudoku/resoldre/taronja.gif" alt="Color taronja"/></p>
                <img src="/img/sudoku/resoldre/sudoku_mid-04c.gif" alt="Exemple"/>
            </li>
            <li>
                <p>Quin número anirà a l'altra <img src="/img/sudoku/resoldre/violeta.gif" alt="Color violeta"/>?</p>
            </li>
        </ul>
    </li>
    <li><h3>Exemple 5</h3>
        <ul>
            <li>
                <p>On poden anar l'1, el 8 i el 9?</p>
                <img src="/img/sudoku/resoldre/sudoku_mid-05a.gif" alt="Exemple"/>
            </li>
            <li>
                <p>En la fila superior hi ha els números del 2 al 7.<br/>
                Això vol dir que l'1, el 8 i el 9 van en les tres <img src="/img/sudoku/resoldre/violeta.gif" alt="Color violeta"/></p>
                <img src="/img/sudoku/resoldre/sudoku_mid-05b.gif" alt="Exemple"/>
            </li>
            <li>
                <p>En la columna esquerra hi ha els números 8 i 9.<br/>
                Per això, el 8 i el 9 han d'anar a les <img src="/img/sudoku/resoldre/violeta.gif" alt="Color violeta"/>.</p>
                <img src="/img/sudoku/resoldre/sudoku_mid-05c.gif" alt="Exemple"/>
            </li>
            <li>
                <p>Després d'això l'1 solament pot anar a <img src="/img/sudoku/resoldre/taronja.gif" alt="Color taronja"/></p>
                <img src="/img/sudoku/resoldre/sudoku_mid-05d.gif" alt="Exemple"/>
            </li>
        </ul>
    </li>
</ul>

### Nivell expert

<ul id="resoldre" class="col_2">
    <li><h3>Exemple 1</h3>
        <ul>
            <li>
                <p>On poden anar el 2 i 3?</p>
                <img src="/img/sudoku/resoldre/sudoku_hard-01a.gif" alt="Exemple"/>
            </li>
            <li>
                <p>Has de mirar les files i columnes.</p>
                <img src="/img/sudoku/resoldre/sudoku_hard-01b.gif" alt="Exemple"/>
            </li>
            <li>
                <p>El 2 i el 3 han d'anar als <img src="/img/sudoku/resoldre/violeta.gif" alt="Color violeta"/></p>
                <img src="/img/sudoku/resoldre/sudoku_hard-01c.gif" alt="Exemple"/>
            </li>
            <li>
                <p>Ara mira on pot anar l'1.</p>
                <img src="/img/sudoku/resoldre/sudoku_hard-01d.gif" alt="Exemple"/>
            </li>
            <li>
                <p>L'1 solament pot anar a <img src="/img/sudoku/resoldre/taronja.gif" alt="Color taronja"/>.
                Perquè els altres estan ocupats.</p>
                <img src="/img/sudoku/resoldre/sudoku_hard-01e.gif" alt="Exemple"/>
            </li>
        </ul>
        </li>
        <li><h3>Exemple 2</h3>
        <ul>
            <li>
                <p>On pot anar l'1?</p>
                <img src="/img/sudoku/resoldre/sudoku_hard-02a.gif" alt="Exemple"/>
            </li>
            <li>
                <p>El 1 és l'únic número que pot anar a <img src="/img/sudoku/resoldre/taronja.gif" alt="Color taronja"/>, ja que els números del 5 al 9 no poden anar per la raó que estan en la mateixa fila o columna</p>
                <img src="/img/sudoku/resoldre/sudoku_hard-02b.gif" alt="Exemple"/>
            </li>
        </ul>
        </li>
</ul>