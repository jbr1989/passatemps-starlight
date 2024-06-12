---
title: ''
template: splash
description: A reference page in my new Starlight docs site.

---

Un passatemps, afició o hobby és una activitat sense finalitat productiva concreta, el valor de la qual resideix en l'entreteniment d'aquell que ho executa.

Passatemps pot referir-se també a un joc d'enginy, coneixement del llenguatge, resolució de problemes espacials, etc.; habituals en molts periódics i revistes d'informació general. Alguns passatemps comuns són:

<section style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px;">
    {
        tipusPassatemps.map(({ title, img, path }) => (
            <a href={path}>
                <div class="flex flex-col gap-4">
                    <h2 class="title mb-4 text-xl">{title}</h2>
                    <img src={img} alt={title} class="rounded-lg"/>
                </div>
            </a>
        ))
    }
</section>