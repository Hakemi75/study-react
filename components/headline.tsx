

export function Headline(props) {
'use client';
    return (
    <div>
    <button onClick={props.onClick}></button>
    <p>{props.number}</p>
    <p>{props.title}</p>
    <p>{props.page}</p>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            {props.code}
            {props.push}よろしく
          </li>
          <li>save and see your changes instantly.</li>
        </ol>
    </div>
    )
}
