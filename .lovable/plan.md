
# שיפורי ניראות ואפקטים עדינים - אווירה נינוחה

## 1. מעבר צבע רך בין הסקשנים
במקום מעברים חדים בין סקשנים, נוסיף divider עדין בצורת גל או gradient blur בין כל סקשן לסקשן - מרגישה כמו נשימה רכה בין חלקי העמוד.

## 2. הוספת אפקט hover עדין לכרטיסי הערכים (Values)
כרגע יש רק shadow בהובר. נוסיף תזוזה קלה למעלה (translateY -4px) עם transition חלק, כך שהכרטיס "צף" קלות כשעוברים עליו.

## 3. אפקט parallax קל לתמונת ההירו
במקום תמונה סטטית, התמונה תזוז קצת יותר לאט מהסקרול - אפקט parallax עדין מאוד שנותן תחושת עומק בלי להפריע.

## 4. אנימציית כניסה עדינה לטקסט ההקדמה (IntroSection)
כרגע הטקסט עולה מלמטה. נוסיף אנימציית blur-in: הטקסט מתחיל מטושטש קלות ומתחדד בזמן ההופעה - תחושה חלומית ורכה.

## 5. קו מפריד דקורטיבי עדין בין ציטוטים (Testimonials)
נוסיף קו דק עם gradient (מ-transparent דרך primary/30 ל-transparent) בין שני הציטוטים, ונעגל את אייקון הציטוט עם אנימציית fade-in נפרדת.

---

## פירוט טכני

### סקשן dividers
- יצירת קומפוננטה `SectionDivider` עם gradient רך (מ-transparent ל-soft-sage וחזרה)
- גובה של כ-60px עם opacity נמוכה
- הוספה בין הסקשנים ב-Index.tsx

### Hover כרטיסים (ValuesSection)
- הוספת `hover:-translate-y-1 transition-all duration-300` לכרטיסי הערכים
- שמירה על ה-shadow הקיים + הוספת תזוזה

### Parallax קל בהירו (HeroSection)
- שימוש ב-`useScroll` ו-`useTransform` מ-framer-motion
- התמונה זזה בקצב של 0.3 מהסקרול (מאוד עדין)

### Blur-in לאינטרו (IntroSection)
- הוספת `filter: blur(8px)` ל-initial state של האנימציה
- ב-animate: `filter: blur(0px)` עם transition של 1.2 שניות

### קו דקורטיבי בציטוטים (TestimonialsSection)
- הוספת div עם gradient אופקי בין שני הכרטיסים (רק בדסקטופ: hidden, md:block)
- או שימוש ב-border עדין עם opacity נמוכה

### קבצים שישתנו:
- `src/components/HeroSection.tsx` - parallax עדין
- `src/components/IntroSection.tsx` - blur-in animation
- `src/components/ValuesSection.tsx` - hover lift
- `src/components/TestimonialsSection.tsx` - decorative divider
- `src/pages/Index.tsx` - section dividers
- ייתכן קומפוננטה חדשה `src/components/SectionDivider.tsx`
