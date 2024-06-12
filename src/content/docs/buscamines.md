---
title: Example Reference
# template: splash
description: A reference page in my new Starlight docs site.
---

<form method="post" action="" name="joc" id="form_buscamines">         
    <div>
        <label>Taulell:</label> <input name="taulell" id="taulell" class="valor2_caselles" readonly="readonly" />
        <label>Totals:</label> <input name="totals" id="totals" class="valor_caselles" readonly="readonly" />   
    </div>
    <div>
        <label>Mines:</label> <input name="mines" id ="mines" class="valor_caselles" readonly="readonly" />
        <label>Restants:</label> <input name="restants" id="restants" class="valor_caselles" readonly="readonly" />
        <label>Banderes:</label> <input name="banderes" id="banderes" class="valor_caselles" readonly="readonly" />
    </div>  
    <div>
        <label>Temps:</label><input name="temps" id="temps" value="0" style="width:60px;" readonly="readonly"/>
    </div>
    <div id="buscamines"> <!-- TAULA --></div>
    <div id="col"></div>
    <div id="nivell_buscamines">
        <label>Nivell:</label>
        <span id="opcio_nivell1">
            <select name="nivell" id="nivell">
                <option value="FACIL">&nbsp;&nbsp;FÀCIL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(10x10) (10 mines)</option>
                <option value="NORMAL">&nbsp;&nbsp;NORMAL&nbsp;&nbsp;&nbsp;(16x16) (40 mines)</option>
                <option value="DIFICIL">&nbsp;&nbsp;DIFÍCIL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(22x22) (99 mines)</option>
            </select>
        </span>
        <button name="nou_joc" onclick="return nou();" >JOC NOU</button>
    </div>
</form> 
<script src="/js/buscamines/cronometro.js"></script>
<script src="/js/buscamines/buscamines.js"></script>