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
    { code:"en", native:"English", dir:"ltr" }
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
    }
  }
};
