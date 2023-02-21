import Image from 'next/image'
import ChartHover from './../../statics/img/chart-hover.svg'
import downloadHover from './../../statics/img/download-hover.svg'
import UploadDefault from './../../statics/img/supload.svg'
import Bar from './Bar'
import Line from './Line'

export default function FilePage() {
  return (
    <div>

      <div className='h-[200px] border-[2px] border-[#000] rounded-[10px]'>
        <textarea className='w-full h-[120px] border-none rounded-[10px]'></textarea>
      </div>

      <div className='flex justify-end my-5'>
        <button className='w-[100px] flex justify-center items-center bg-[#000] text-[#fff] h-[46px] rounded-[10px] cursor-pointer hover:bg-[#181EFF] mr-5'>Save</button>
        <button className='w-[100px] flex justify-center items-center bg-[#000] text-[#fff] h-[46px] rounded-[10px] cursor-pointer hover:bg-[#181EFF] mr-5'>Explain</button>
        <button className='w-[100px] flex justify-center items-center bg-[#000] text-[#fff] h-[46px] rounded-[10px] cursor-pointer hover:bg-[#181EFF] mr-5'>Run</button>
      </div>

      <div className='mt-5'>
        <div className='border-[2px] border-b-[0px] border-[#000] rounded-tl-[10px] rounded-tr-[10px] w-[fit-content] px-5 py-2 bg-[#181EFF] text-[#fff]'>Here is your Result</div>
        <div className='border-[2px] border-[#000] rounded-bl-[10px] rounded-br-[10px] rounded-tr-[10px] p-5'>
          <div className='flex justify-end'>
            <Image
              src={ChartHover}
              className='cursor-pointer h-[30px] w-[30px] mr-4'
              alt=""
            />
            <Image
              src={downloadHover}
              className='cursor-pointer h-[36px] w-[36px] mr-4'
              alt=""
            />
            <Image
              src={UploadDefault}
              className='cursor-pointer h-[36px] w-[36px] mr-4'
              alt=""
            />
          </div>
          <div className='h-[260px] border-[2px] border-[#000] rounded-[10px] mb-5'>
            table
          </div>
          <div className='h-[260px] border-[2px] border-[#000] rounded-[10px] mb-5'>
            <Bar data={{ xData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], yData: [120, 200, 150, 80, 70, 110, 130] }} />
          </div>
          <div className='h-[260px] border-[2px] border-[#000] rounded-[10px]'>
            <Line data={{ xData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], yData: [120, 200, 150, 80, 70, 110, 130] }} />
          </div>

          <div className='h-[260px] border-[2px] border-[#000] rounded-[10px] p-5 flex'>
            <div className='border-[2px] border-[#000] w-[calc(50%-10px)] mr-5 rounded-[10px]'>

              <div className='py-[20px] px-[20px] rounded-[4px] relative my-[10px]'>
                <div className='flex'>
                  <div>Pub #pubId</div>
                </div>
                <div className='text-[14px] my-[10px]'>
                  1 h
                </div>
                <p className='text-[14px]'>
                  content
                </p>
              </div>

            </div>

            <div className='border-[2px] border-[#000] w-[calc(50%-10px)] rounded-[10px]'>
              description
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}