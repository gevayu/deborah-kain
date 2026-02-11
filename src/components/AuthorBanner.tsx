import dvoraAuthor from "@/assets/dvora-author.jpg";

const AuthorBanner = () => {
  return (
    <div className="bg-card/60 border border-border/30 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 mt-12" dir="rtl">
      <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary/20">
        <img
          src={dvoraAuthor}
          alt="דבורה קיין רייניש"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-center md:text-right">
        <h3 className="text-lg font-heading font-bold text-foreground mb-2">דבורה קיין רייניש</h3>
        <p className="text-muted-foreground font-body leading-relaxed text-base">
          פסיכולוגית ומנחת קבוצות בפוטותרפיה וסולקולאז'. מנחה סדנאות במרכזים קהילתיים, בדיור מוגן ובקליניקה ברמת-גן. בכל מפגש — בין אם קבוצתי או פרטני — אני מביאה את כל הידע, הניסיון, והרבה אהבה.
        </p>
      </div>
    </div>
  );
};

export default AuthorBanner;
