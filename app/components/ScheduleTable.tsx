type ScheduleItem = {
  time: string;
  description: string | string[];
};

type ScheduleSection = {
  title: string;
  items: ScheduleItem[];
};

const schedules: ScheduleSection[] = [
  {
    title: "កម្មវិធីថ្ងៃទី១ ថ្ងៃសៅរ៍ ទី២៨ ខែកុម្ភៈ ឆ្នាំ២០២៦",
    items: [
      { time: "ម៉ោង ០២:០០ រសៀល", description: "ពិធីសែនក្រុងពាលី" },
      { time: "ម៉ោង ០៣:០០ រសៀល", description: "ពិធីសូត្រមន្តចំរើនព្រះបរិត្ត" },
      { time: "ម៉ោង ០៤:០០ រសៀល", description: "ពិធីជាវខាន់ស្លា" },
      { time: "ម៉ោង ០៥:០០ ល្ងាច", description: "អញ្ជើញភ្ញៀវកិត្តិយសពិសាអាហារ" },
    ],
  },
  {
    title: "កម្មវិធីថ្ងៃទី២ ថ្ងៃអាទិត្យ ទី០១ ខែមីនា ឆ្នាំ២០២៦",
    items: [
      {
        time: "ម៉ោង ០៦:៣០ ព្រឹក",
        description: "ជួបជុំភ្ញៀវកិត្តិយស ដើម្បីរៀបចំហែជំនួន",
      },
      { time: "ម៉ោង ០៧:០០ ព្រឹក", description: "ពិធីហែជំនួន (កំណត់)" },
      {
        time: "ម៉ោង ០៧:៣០ ព្រឹក",
        description: ["ពិធីចៅមហានិយាយជើងការ", "រាប់ផ្លែឈើ"],
      },
      { time: "ម៉ោង ០៩:១៥ ព្រឹក", description: "ពិធីកាត់សក់បង្កក់សិរី" },
      {
        time: "ម៉ោង ១១:០០ ថ្ងៃត្រង់",
        description: "ពិធីបង្វិលពពិល សំពះផ្ទឹមសែនចងដៃ",
      },
      {
        time: "ម៉ោង ១២:០០ ថ្ងៃត្រង់",
        description: "អញ្ជើញភ្ញៀវពិសាអាហារថ្ងៃត្រង់",
      },
      {
        time: "ម៉ោង ០៤:០០ រសៀល",
        description: "ទទួលភ្ញៀវកិត្តិយសពិសា ភោជនាហារ",
      },
    ],
  },
];

export default function ScheduleTimeline() {
  return (
    <div className="space-y-16">
      {schedules.map((section, sectionIndex) => (
        <section key={sectionIndex}>
          <h2 className="mb-6 md:mb-8 text-lg md:text-xl font-semibold text-gray-900">
            {section.title}
          </h2>
          <div className="relative pl-6 md:pl-0 md:last:pl-0">
            <div
              className="
                absolute
                left-3 md:left-48
                top-0 bottom-0
                w-px
                bg-gray-300
              "
            />

            <div className="space-y-8 md:space-y-10">
              {section.items.map((item, index) => (
                <div
                  key={index}
                  className="
                    relative
                    group
                    grid grid-cols-1
                    md:grid-cols-[12rem_1fr]
                    gap-2 md:gap-8
                  "
                >
                  <div
                    className="
                      text-sm md:text-base
                      font-medium
                      text-gray-600
                      whitespace-nowrap
                    "
                  >
                    {item.time}
                  </div>
                  <div className="relative pl-6 md:pl-0">
                    <span
                      className="
                        absolute
                        left-[-1.35rem] md:left-[-1.45rem]
                        top-1.5
                        h-3 w-3
                        rounded-full
                        bg-white
                        border-2 border-gray-400
                        transition-all duration-300
                        group-hover:border-gray-900
                        group-hover:scale-110
                      "
                    />
                    <div className="text-gray-900 text-sm md:text-base">
                      {Array.isArray(item.description) ? (
                        <div className="space-y-1">
                          {item.description.map((line, i) => (
                            <div key={i}>{line}</div>
                          ))}
                        </div>
                      ) : (
                        item.description
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
