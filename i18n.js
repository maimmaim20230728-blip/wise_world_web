/*
 * Wise World - i18n（画面の文言）
 * ----------------------------------------------------------------------------
 * 言語を追加する手順（3ステップ）:
 *   1) この langs に {code, native, dir} を1行追加
 *   2) この ui に code: {...} ブロックを追加（下の en をコピーして訳す）
 *   3) questions.<code>.js を作成（questions.en.js をコピーして訳す）
 * → アプリ側のコードは触らなくてOK。言語ボタンに自動で出ます。
 *
 * dir は文字方向。アラビア語など右→左の言語は "rtl"。
 * reviewNote は「AI翻訳・要確認」の注記（原語=日本語は null）。
 * 文中の {n} は数字に置き換わります。
 * ----------------------------------------------------------------------------
 */
window.WISE_WORLD_I18N = {
  // 出題データ(questions.<code>.js)が用意できた言語だけ並べる
  langs: [
    { code:"ja", native:"日本語",  dir:"ltr" },
    { code:"en", native:"English", dir:"ltr" },
    { code:"es", native:"Español", dir:"ltr" },
    { code:"fr", native:"Français", dir:"ltr" },
    { code:"pt", native:"Português", dir:"ltr" },
    { code:"id", native:"Bahasa Indonesia", dir:"ltr" }
  ],

  ui: {
    ja: {
      langName:"日本語",
      tagline:"生きる ちからを まなぼう ✨",
      start:"▶ クイズを はじめる",
      toNext:"つぎの レベルまで あと {n} EXP",
      reset:"きろくを さいしょから",
      resetConfirm:"レベルと EXP を さいしょから やりなおしますか？",
      count:"{n}もんめ",
      correct:"せいかい！",
      wrong:"ざんねん…",
      rewardPending:"🌟 さいごまで よむと +{n} EXP",
      rewardEarned:"+{n} EXP かくとく！",
      nextLocked:"もうすこし… ({n})",
      nextScroll:"さいごまで よんでね ↓",
      nextReady:"つぎの もんだいへ →",
      earning:"EXP かくとく！",
      levelUp:"レベルアップ！",
      levelUpOk:"やった！",
      chooseLang:"ことばを えらぶ",
      credit:"アプリ開発：介護と支援の相談どころ　そよぎ",
      reviewNote:null
    },
    en: {
      langName:"English",
      tagline:"Learn how to live well ✨",
      start:"▶ Start Quiz",
      toNext:"{n} EXP to the next level",
      reset:"Reset progress",
      resetConfirm:"Start over and reset your level and EXP?",
      count:"Q{n}",
      correct:"Correct!",
      wrong:"Not quite…",
      rewardPending:"🌟 Read to the end for +{n} EXP",
      rewardEarned:"+{n} EXP earned!",
      nextLocked:"A little more… ({n})",
      nextScroll:"Please read to the end ↓",
      nextReady:"Next question →",
      earning:"Earning EXP!",
      levelUp:"Level Up!",
      levelUpOk:"Yay!",
      chooseLang:"Choose language",
      credit:"Developed by Soyogi — Care & Support Consultation",
      reviewNote:"⚠ AI translation. Review by a native speaker / health expert is recommended."
    },
    es: {
      langName:"Español",
      tagline:"Aprende a vivir sano ✨",
      start:"▶ Empezar el quiz",
      toNext:"{n} EXP para el siguiente nivel",
      reset:"Reiniciar el progreso",
      resetConfirm:"¿Empezar de nuevo y reiniciar tu nivel y EXP?",
      count:"P{n}",
      correct:"¡Correcto!",
      wrong:"Casi…",
      rewardPending:"🌟 Lee hasta el final para +{n} EXP",
      rewardEarned:"¡+{n} EXP ganados!",
      nextLocked:"Un poco más… ({n})",
      nextScroll:"Lee hasta el final ↓",
      nextReady:"Siguiente pregunta →",
      earning:"¡Ganando EXP!",
      levelUp:"¡Subiste de nivel!",
      levelUpOk:"¡Bien!",
      chooseLang:"Elegir idioma",
      credit:"Desarrollado por Soyogi — Consultas de cuidado y apoyo",
      reviewNote:"⚠ Traducción por IA. Se recomienda la revisión de un hablante nativo o experto en salud."
    },
    fr: {
      langName:"Français",
      tagline:"Apprends à vivre en bonne santé ✨",
      start:"▶ Commencer le quiz",
      toNext:"{n} EXP avant le niveau suivant",
      reset:"Réinitialiser la progression",
      resetConfirm:"Tout recommencer et réinitialiser ton niveau et tes EXP ?",
      count:"Q{n}",
      correct:"Bravo !",
      wrong:"Presque…",
      rewardPending:"🌟 Lis jusqu'au bout pour +{n} EXP",
      rewardEarned:"+{n} EXP gagnés !",
      nextLocked:"Encore un peu… ({n})",
      nextScroll:"Lis jusqu'au bout ↓",
      nextReady:"Question suivante →",
      earning:"Tu gagnes des EXP !",
      levelUp:"Niveau supérieur !",
      levelUpOk:"Super !",
      chooseLang:"Choisir la langue",
      credit:"Développé par Soyogi — Consultations de soins et de soutien",
      reviewNote:"⚠ Traduction par IA. La révision par un locuteur natif ou un expert en santé est recommandée."
    },
    pt: {
      langName:"Português",
      tagline:"Aprenda a viver com saúde ✨",
      start:"▶ Começar o quiz",
      toNext:"{n} EXP para o próximo nível",
      reset:"Reiniciar o progresso",
      resetConfirm:"Começar de novo e zerar seu nível e EXP?",
      count:"P{n}",
      correct:"Correto!",
      wrong:"Quase…",
      rewardPending:"🌟 Leia até o fim para +{n} EXP",
      rewardEarned:"+{n} EXP ganhos!",
      nextLocked:"Mais um pouco… ({n})",
      nextScroll:"Leia até o fim ↓",
      nextReady:"Próxima pergunta →",
      earning:"Ganhando EXP!",
      levelUp:"Subiu de nível!",
      levelUpOk:"Eba!",
      chooseLang:"Escolher idioma",
      credit:"Desenvolvido pela Soyogi — Consultoria de cuidado e apoio",
      reviewNote:"⚠ Tradução por IA. Recomenda-se a revisão por um falante nativo ou especialista em saúde."
    },
    id: {
      langName:"Bahasa Indonesia",
      tagline:"Belajar hidup sehat ✨",
      start:"▶ Mulai kuis",
      toNext:"{n} EXP menuju level berikutnya",
      reset:"Atur ulang progres",
      resetConfirm:"Mulai dari awal dan atur ulang level serta EXP-mu?",
      count:"No.{n}",
      correct:"Benar!",
      wrong:"Hampir…",
      rewardPending:"🌟 Baca sampai habis untuk +{n} EXP",
      rewardEarned:"+{n} EXP didapat!",
      nextLocked:"Sebentar lagi… ({n})",
      nextScroll:"Baca sampai habis ↓",
      nextReady:"Pertanyaan berikutnya →",
      earning:"Mendapat EXP!",
      levelUp:"Naik level!",
      levelUpOk:"Hore!",
      chooseLang:"Pilih bahasa",
      credit:"Dikembangkan oleh Soyogi — Konsultasi perawatan & dukungan",
      reviewNote:"⚠ Terjemahan AI. Disarankan ditinjau oleh penutur asli atau ahli kesehatan."
    }
  }
};
