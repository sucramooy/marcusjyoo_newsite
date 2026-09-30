import { getCollection } from 'astro:content';
import type { CollectionEntry, CollectionKey } from 'astro:content';
import { site } from '../data/site';
import { sitePath } from './urls';

export type Writing = CollectionEntry<'writing'>;
export type Project = CollectionEntry<'projects'>;
export type Photo = CollectionEntry<'photos'>;

/* ─── Loaders ─────────────────────────────────────────────── */

export async function getPublishedWriting(locale = site.locale) {
  const entries = await getCollection(
    'writing',
    ({ data }) => !data.draft && data.locale === locale,
  );
  return entries.sort((a, b) => {
    const aDate = a.data.updatedAt ?? a.data.publishedAt;
    const bDate = b.data.updatedAt ?? b.data.publishedAt;
    return (bDate?.valueOf() ?? 0) - (aDate?.valueOf() ?? 0);
  });
}

export async function getPublishedCollection<T extends CollectionKey>(
  name: T,
  locale = site.locale,
): Promise<CollectionEntry<T>[]> {
  return getCollection(
    name,
    ({ data }) => !data.draft && data.locale === locale,
  ) as Promise<CollectionEntry<T>[]>;
}

/* ─── Sorting ─────────────────────────────────────────────── */

/**
 * Sort by publishedAt descending. Entries without a date fall to the end.
 * Kept for writing; for projects, prefer sorting by `data.order`.
 */
export function byDate<T extends { data: { publishedAt?: Date } }>(entries: T[]) {
  return [...entries].sort((a, b) => {
    const aDate = a.data.publishedAt?.valueOf() ?? 0;
    const bDate = b.data.publishedAt?.valueOf() ?? 0;
    return bDate - aDate;
  });
}
export function byOrder<T extends { data: { order: number } }>(entries: T[]) {
  return [...entries].sort((a, b) => a.data.order - b.data.order);
}

/* ─── Slugs ───────────────────────────────────────────────── */

export function slugFromId(id: string) {
  return id.replace(/^.*\//, '').replace(/\.(md|mdx)$/, '');
}

/* ─── Paths ───────────────────────────────────────────────── */

export function writingPath(entry: Writing) {
  const date = entry.data.publishedAt;
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  return sitePath(`/writing/${year}/${month}/${slugFromId(entry.id)}/`);
}



export function photoPath(entry: Photo) {
  return sitePath(`/photos/${entry.data.slug}/`);
}

export type Work = CollectionEntry<'work'>;

export function workPath(entry: Work) {
  return sitePath(`/work/${slugFromId(entry.id)}/`);
}

export function projectSlug(entry: Project) {
  return slugFromId(entry.id);
}

export function projectPath(entry: Project) {
  return sitePath(`/projects/${projectSlug(entry)}/`);
}

/* ─── Year helpers (writing only) ─────────────────────────── */

export function yearOf(entry: Writing) {
  return entry.data.publishedAt.getFullYear();
}

/* ─── Tags ────────────────────────────────────────────────── */

export function getTags(
  entries: Writing[],
  threshold = site.tagIndexThreshold,
) {
  const counts = new Map<string, number>();
  for (const entry of entries) {
    for (const tag of entry.data.tags) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }
  return [...counts.entries()]
    .filter(([, count]) => count >= threshold)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
}

export function tagSlug(tag: string) {
  return tag
    .toLowerCase()
    .trim()
    .replace(/[\\/?#%]+/g, '-')
    .replace(/\s+/g, '-');
}

/* ─── Excerpt ─────────────────────────────────────────────── */

export function excerpt(text: string, length = 180) {
  const clean = text
    .replace(/[#*_>`\[\]()]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  return clean.length > length ? `${clean.slice(0, length).trim()}…` : clean;
}