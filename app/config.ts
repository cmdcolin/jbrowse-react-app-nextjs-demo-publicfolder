function p(str: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH}/${str}`
}

const config = {
  assemblies: [
    {
      name: 'volvox',
      sequence: {
        type: 'ReferenceSequenceTrack',
        trackId: 'volvox_refseq',
        adapter: {
          type: 'TwoBitAdapter',
          twoBitLocation: {
            uri: p('volvox.2bit'),
            locationType: 'UriLocation',
          },
        },
      },
    },
  ],
  tracks: [
    {
      type: 'AlignmentsTrack',
      trackId: 'volvox_bam_pileup',
      name: 'volvox-sorted.bam',
      assemblyNames: ['volvox'],
      adapter: {
        type: 'BamAdapter',
        bamLocation: {
          uri: p('volvox-sorted.bam'),
        },
        index: {
          location: {
            uri: p('volvox-sorted.bam.bai'),
          },
        },
      },
    },
  ],
}

export default config
