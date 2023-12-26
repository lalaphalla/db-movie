import React from 'react'

export default function CastList({casts}) {
  return (
    <div className="mx-auto max-w-screen-xl bg-white pb-3">
            <h3 className="mt-4 text-2xl font-bold">Top Billed Cast</h3>
            <div className="mt-4 grid grid-cols-3 md:grid-cols-7 gap-4">
              {casts.length > 0 &&
                casts.map((cast) => (
                  <CardCast
                    key={cast.id}
                    id={cast.id}
                    name={cast.name}
                    profile_path={cast.profile_path}
                    character={cast.character}
                  />
                ))}
            </div>
          </div>
  )
}
