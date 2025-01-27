

export function Headline(props) {
    return (
    <div>
    <p>{props.title}</p>
    <p>{props.page}</p>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              app/page.tsx thank you
            </code>
          </li>
          <li>save and see your changes instantly.</li>
        </ol>
    </div>
    )
}
