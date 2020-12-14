import React, { useRef } from 'react';
import {t} from '@/i18n';
import { observer } from 'mobx-react';
import { useBoardStore } from '@/hooks';
import "./showFrame.scss"

export const ShowFrame: React.FC<any> = observer(() => {

  const boardStore = useBoardStore()

 
  return (
    <div className="show-iframe">
      <iframe src="https://learn.stepapp.in/" ></iframe>
    </div>
  )
})